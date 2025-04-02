#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const tokensPath = path.resolve(__dirname, '../../libs/shared/design-tokens/src/tokens.json');
const outputPath = path.resolve(__dirname, '../../libs/shared/design-tokens/src/_tokens.scss');

// Read tokens
const tokens = require(tokensPath);
let scssContent = '// Auto-generated from tokens.json. Do not edit directly.\n\n';

/**
 * Process nested objects into SCSS variables
 * @param {Object} obj - The object to process
 * @param {string} prefix - The prefix for variable names
 */
function processObject(obj, prefix = '') {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      processObject(value, `${prefix}${key}-`);
    } else {
      scssContent += `$${prefix}${key}: ${value};\n`;
    }
  });
}

// Generate SCSS variables
processObject(tokens);

// Add map variables for easier access in components
scssContent += '\n// Maps for programmatic access\n';

// Create color map
scssContent += '$color-map: (\n';
Object.keys(tokens.color).forEach(key => {
  if (typeof tokens.color[key] === 'object') {
    scssContent += `  "${key}": (\n`;
    Object.keys(tokens.color[key]).forEach(subKey => {
      scssContent += `    "${subKey}": $color-${key}-${subKey},\n`;
    });
    scssContent += '  ),\n';
  } else {
    scssContent += `  "${key}": $color-${key},\n`;
  }
});
scssContent += ');\n\n';

// Create spacing map
scssContent += '$spacing-map: (\n';
Object.keys(tokens.spacing).forEach(key => {
  scssContent += `  "${key}": $spacing-${key},\n`;
});
scssContent += ');\n\n';

// Create breakpoints map
scssContent += '$breakpoints-map: (\n';
Object.keys(tokens.breakpoints).forEach(key => {
  scssContent += `  "${key}": $breakpoints-${key},\n`;
});
scssContent += ');\n\n';

// Create utility functions
scssContent += '// Utility functions\n';
scssContent += '@function color($key, $shade: null) {\n';
scssContent += '  @if $shade {\n';
scssContent += '    @return map-get(map-get($color-map, $key), $shade);\n';
scssContent += '  } @else {\n';
scssContent += '    @return map-get($color-map, $key);\n';
scssContent += '  }\n';
scssContent += '}\n\n';

scssContent += '@function spacing($key) {\n';
scssContent += '  @return map-get($spacing-map, $key);\n';
scssContent += '}\n\n';

scssContent += '@function breakpoint($key) {\n';
scssContent += '  @return map-get($breakpoints-map, $key);\n';
scssContent += '}\n';

// Write to file
fs.writeFileSync(outputPath, scssContent);
console.log(`SCSS tokens generated at ${outputPath}`); 