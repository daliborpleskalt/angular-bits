#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const budgetPath = path.resolve(__dirname, '../../apps/showcase/.config/performance-budget.json');
const statsPath = path.resolve(__dirname, '../../dist/apps/showcase/stats.json');

// Read budget configuration
const budgetConfig = JSON.parse(fs.readFileSync(budgetPath, 'utf8'));

// Build the app with stats
console.log('Building app with stats...');
try {
  execSync('nx build showcase --stats-json', { stdio: 'inherit' });
} catch (error) {
  console.error('Error building app:', error);
  process.exit(1);
}

// Read stats
console.log('Checking performance budgets...');
const stats = JSON.parse(fs.readFileSync(statsPath, 'utf8'));

// Check budgets
let budgetViolations = [];

// Check initial bundle size
const initialSize = stats.assets
  .filter(asset => asset.name.endsWith('.js') || asset.name.endsWith('.css'))
  .reduce((total, asset) => total + asset.size, 0);

const initialBudget = budgetConfig.budgets.find(budget => budget.type === 'initial');
if (initialBudget) {
  const initialSizeKb = initialSize / 1024;
  if (initialSizeKb > initialBudget.maximumError) {
    budgetViolations.push({
      type: 'initial',
      size: initialSizeKb.toFixed(2) + 'kb',
      budget: initialBudget.maximumError,
      severity: 'error'
    });
  } else if (initialSizeKb > initialBudget.maximumWarning) {
    budgetViolations.push({
      type: 'initial',
      size: initialSizeKb.toFixed(2) + 'kb',
      budget: initialBudget.maximumWarning,
      severity: 'warning'
    });
  }
}

// Check component styles
const styleBudget = budgetConfig.budgets.find(budget => budget.type === 'anyComponentStyle');
if (styleBudget) {
  const styleAssets = stats.assets.filter(asset => asset.name.endsWith('.css'));
  styleAssets.forEach(asset => {
    const sizeKb = asset.size / 1024;
    if (sizeKb > styleBudget.maximumError) {
      budgetViolations.push({
        type: 'style',
        name: asset.name,
        size: sizeKb.toFixed(2) + 'kb',
        budget: styleBudget.maximumError,
        severity: 'error'
      });
    } else if (sizeKb > styleBudget.maximumWarning) {
      budgetViolations.push({
        type: 'style',
        name: asset.name,
        size: sizeKb.toFixed(2) + 'kb',
        budget: styleBudget.maximumWarning,
        severity: 'warning'
      });
    }
  });
}

// Check specific bundles
const bundleBudgets = budgetConfig.budgets.filter(budget => budget.type === 'bundle');
bundleBudgets.forEach(bundleBudget => {
  const bundle = stats.assets.find(asset => asset.name.includes(bundleBudget.name));
  if (bundle) {
    const sizeKb = bundle.size / 1024;
    if (sizeKb > bundleBudget.maximumError) {
      budgetViolations.push({
        type: 'bundle',
        name: bundle.name,
        size: sizeKb.toFixed(2) + 'kb',
        budget: bundleBudget.maximumError,
        severity: 'error'
      });
    } else if (sizeKb > bundleBudget.maximumWarning) {
      budgetViolations.push({
        type: 'bundle',
        name: bundle.name,
        size: sizeKb.toFixed(2) + 'kb',
        budget: bundleBudget.maximumWarning,
        severity: 'warning'
      });
    }
  }
});

// Report violations
if (budgetViolations.length > 0) {
  console.log('\nPerformance budget violations:');
  budgetViolations.forEach(violation => {
    const color = violation.severity === 'error' ? '\x1b[31m' : '\x1b[33m';
    console.log(`${color}[${violation.severity.toUpperCase()}]\x1b[0m ${violation.type} ${violation.name || ''}: ${violation.size} exceeds budget of ${violation.budget}kb`);
  });
  
  // Exit with error if there are error-level violations
  if (budgetViolations.some(v => v.severity === 'error')) {
    process.exit(1);
  }
} else {
  console.log('\n✅ All performance budgets are met!');
} 