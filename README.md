# Angular Bits

An educational monorepo showcasing Angular best practices, patterns, and examples.

## Features

- 🎯 Focused examples of Angular concepts and patterns
- 📚 Educational content with interactive demos
- 🏗️ Built with Nx for optimal monorepo management
- 🎨 Nebular UI components for consistent, beautiful interfaces
- 🔄 Dynamic topic loading with demo-loader
- 🧩 Standalone components throughout
- 📐 BEM methodology for CSS
- 🛠️ Custom generators for consistent topic creation

## Project Structure

```
angular-bits/
├── apps/
│   └── showcase/          # Main demo application
├── libs/
│   ├── shared/
│   │   ├── core/         # Core utilities and services
│   │   ├── ui/          # Shared UI components
│   │   └── demo-loader/  # Dynamic topic loader
│   └── topics/          # Educational topic components
└── tools/
    └── generators/      # Custom Nx generators
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/angular-bits.git
cd angular-bits
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
nx serve showcase
```

4. Visit http://localhost:4200

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

## UI Components

We use [Nebular](https://akveo.github.io/nebular/) as our UI component library. All examples and demos should use Nebular components exclusively.

## Development Guidelines

Please refer to:
- `.cursorrules` for detailed development rules
- `CONTRIBUTING.md` for contribution guidelines
- Individual library README files for specific documentation

## Available Commands

- `nx serve showcase` - Start the development server
- `nx build showcase` - Build the showcase app
- `nx test showcase` - Run unit tests
- `nx affected:test` - Run tests for affected projects
- `nx affected:build` - Build affected projects

## License

MIT
