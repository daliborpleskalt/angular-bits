# Topics Library

This library contains all the educational topic components for Angular Bits.

## Structure

Each topic follows a consistent structure:
```
topics/
└── src/
    └── lib/
        └── topics/
            └── [topic-name]/
                ├── [topic-name].component.ts
                ├── [topic-name].component.html
                ├── [topic-name].component.scss
                └── demo/
                    └── [topic-name]-demo.component.ts
```

## Creating New Topics

Use our custom generator to create new topics:

```bash
nx generate @angular-bits/generators:topic --name=your-topic-name --category=component
```

Available categories:
- component
- directive
- service
- pipe

## Guidelines

1. Each topic should:
   - Use Nebular UI components
   - Follow BEM methodology for styling
   - Include comprehensive documentation
   - Provide interactive examples
   - Be self-contained

2. Main component should:
   - Demonstrate the core concept
   - Be reusable
   - Have clear documentation
   - Follow best practices

3. Demo component should:
   - Show various use cases
   - Include code examples
   - Explain common pitfalls
   - Provide interactive elements

## Current Topics

- Content Projection (`content-projection`)
  - Demonstrates Angular's content projection capabilities
  - Shows single and multi-slot projection
  - Includes conditional projection examples

## Testing

Run tests for all topics:
```bash
nx test topics
```

Run tests for a specific topic:
```bash
nx test topics --test-pattern=**/content-projection/*
```
