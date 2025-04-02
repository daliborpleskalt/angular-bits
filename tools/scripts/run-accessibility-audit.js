#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create reports directory if it doesn't exist
const reportsDir = path.resolve(__dirname, '../../reports/accessibility');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Get current date for report filename
const date = new Date();
const reportFilename = `accessibility-audit-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}.json`;
const reportPath = path.join(reportsDir, reportFilename);

// Start the dev server
console.log('Starting development server...');
const serverProcess = require('child_process').spawn('nx', ['serve', 'showcase'], {
  detached: true,
  stdio: 'ignore'
});

// Give the server some time to start
console.log('Waiting for server to start...');
setTimeout(() => {
  try {
    // Run pa11y-ci
    console.log('Running accessibility audit...');
    execSync(`npx pa11y-ci --json > ${reportPath}`, { stdio: 'inherit' });
    
    // Parse the report
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    
    // Log summary
    console.log(`\nAccessibility Audit Summary (${date.toLocaleDateString()}):`);
    console.log(`Total URLs tested: ${report.total}`);
    console.log(`Passed: ${report.passes.length}`);
    console.log(`Failed: ${report.failures.length}`);
    
    if (report.failures.length > 0) {
      console.log('\nFailures:');
      report.failures.forEach((failure, index) => {
        console.log(`\n${index + 1}. ${failure.pageUrl}`);
        failure.issues.forEach(issue => {
          console.log(`   - ${issue.code}: ${issue.message}`);
        });
      });
    }
    
    console.log(`\nFull report saved to: ${reportPath}`);
  } catch (error) {
    console.error('Error running accessibility audit:', error);
  } finally {
    // Kill the server process
    process.kill(-serverProcess.pid);
    process.exit(report?.failures?.length > 0 ? 1 : 0);
  }
}, 10000);

// Handle process termination
process.on('SIGINT', () => {
  if (serverProcess) {
    process.kill(-serverProcess.pid);
  }
  process.exit();
}); 