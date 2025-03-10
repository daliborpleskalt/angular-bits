# UI Library

This library contains UI components and theming for the Angular Bits project. It provides a comprehensive UX framework that leverages Nebular's capabilities while adhering to modern interaction design principles.

## Features

- 🎨 Design Token Management: SCSS variables in version-controlled JSON files
- 📚 Component Library Documentation: Storybook integration for 100% component coverage
- ⚡ Performance Budgeting: Enforces 150KB CSS/JS limits per route
- ♿ Accessibility: WCAG 2.1 AA compliance checks

## Structure

```
ui/
├── src/
│   └── lib/
│       ├── button/              # Button component
│       ├── theme/               # Nebular theme customization
│       └── ... other components
```

## Usage

### Components

Import components directly:

```typescript
import { ButtonComponent } from '@angular-bits/ui';

@Component({
  // ...
  imports: [ButtonComponent],
})
export class MyComponent {}
```

### Theme

To use the custom theme, import the ThemeModule:

```typescript
import { ThemeModule } from '@angular-bits/ui';

@NgModule({
  imports: [
    ThemeModule,
    // ...
  ],
})
export class AppModule {}
```

## Design Tokens

This library uses design tokens from the `@angular-bits/design-tokens` package. These tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

To use design tokens in your SCSS:

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

## Component Documentation

All components are documented in Storybook. To view the documentation:

```bash
npm run storybook
```

## Performance Budgeting

We enforce a 150KB limit on CSS/JS per route. To check if your changes meet the budget:

```bash
npm run check:performance
```

## Accessibility

All components are designed to meet WCAG 2.1 AA compliance. We run monthly accessibility audits:

```bash
npm run accessibility:audit
```

## BEM Methodology

We follow the BEM (Block, Element, Modifier) methodology for CSS:

```scss
.ui-button {              // Block
  &__icon {               // Element
    margin-right: 8px;
  }
  
  &--primary {            // Modifier
    font-weight: bold;
  }
}
```

## Nebular Integration

We use Nebular as our UI component library. Our custom theme extends Nebular's default theme with our design tokens.
