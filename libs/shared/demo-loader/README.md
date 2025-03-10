# Demo Loader

A dynamic component loader for Angular Bits educational examples.

## Features

- Dynamic topic loading
- Consistent loading and error states
- Nebular-based UI components
- Type-safe component loading
- Automatic route parameter handling

## Usage

The demo-loader is automatically used by the routing system. When navigating to a topic URL (e.g., `/component/content-projection`), it will:

1. Extract the topic type and name from the URL
2. Dynamically load the corresponding demo component
3. Display loading and error states as needed

## URL Pattern

```
/:type/:topic
```

Example:
```
/component/content-projection
/directive/structural-example
/service/dependency-injection
```

## Component Structure

The demo-loader expects topics to follow this structure:
```
[topic-name]/
├── [topic-name].component.ts      # Main implementation
└── demo/
    └── [topic-name]-demo.component.ts  # Demo wrapper
```

## States

The loader handles these states:
- Loading: Shows a loading indicator
- Error: Displays error messages
- Success: Renders the demo component

## Styling

Uses Nebular components and follows BEM:
```scss
.demo-loader {
  &__loading { ... }
  &__error { ... }
  &__content { ... }
}
```

## Testing

```bash
nx test demo-loader
```
