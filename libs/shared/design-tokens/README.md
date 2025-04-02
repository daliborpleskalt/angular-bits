# Design Tokens

This library contains design tokens for the Angular Bits project. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

## Structure

```
design-tokens/
└── src/
    ├── tokens.json       # Source of truth for design tokens
    └── _tokens.scss      # Auto-generated SCSS variables (do not edit directly)
```

## Usage

### Generating SCSS from JSON

Run the following command to generate SCSS variables from the JSON tokens:

```bash
node tools/scripts/generate-scss-from-tokens.js
```

### Using in SCSS

Import the tokens in your SCSS files:

```scss
@import 'libs/shared/design-tokens/src/tokens';

.my-component {
  color: color('primary');
  background-color: color('basic', '100');
  padding: spacing('md');
  
  @media (min-width: breakpoint('md')) {
    padding: spacing('lg');
  }
}
```

### Available Functions

- `color($key, $shade)`: Get a color value
  - Example: `color('primary')` or `color('basic', '100')`
  
- `spacing($key)`: Get a spacing value
  - Example: `spacing('md')`
  
- `breakpoint($key)`: Get a breakpoint value
  - Example: `breakpoint('md')`

## Integrating with Nebular

The tokens are designed to work seamlessly with Nebular's theming system. You can use these tokens to customize Nebular's theme:

```scss
@import 'libs/shared/design-tokens/src/tokens';
@import '@nebular/theme/styles/theming';
@import '@nebular/theme/styles/themes/default';

$nb-themes: nb-register-theme((
  color-primary-100: color('primary'),
  color-primary-200: color('primary'),
  color-primary-300: color('primary'),
  color-primary-400: color('primary'),
  color-primary-500: color('primary'),
  color-primary-600: color('primary'),
  color-primary-700: color('primary'),
  color-primary-800: color('primary'),
  color-primary-900: color('primary'),
  
  color-success-100: color('success'),
  // ... other color mappings
  
  text-basic-color: color('text', 'primary'),
  text-hint-color: color('text', 'hint'),
  text-disabled-color: color('text', 'disabled'),
  
  // ... other theme properties
), default, default);
```

## Updating Tokens

1. Edit the `tokens.json` file
2. Run the generator script
3. Commit both files to version control 