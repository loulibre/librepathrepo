---
sidebar_position: 2
---

# LibrePath Project Overview

LibrePath is a comprehensive monorepo that unifies multiple applications and shared resources under a single, well-organized workspace. This document provides an overview of the project structure and architecture.

## Project Structure

The monorepo is organized into the following main directories:

```
LibrePath-monorepo/
├── apps/                  # Application projects
│   ├── archives/         # Archives application
│   │   ├── web/         # Next.js web app
│   │   ├── mobile/      # React Native app
│   │   └── e2e/         # End-to-end tests
│   ├── aichat/          # AIChat application
│   │   ├── web/         # Next.js web app
│   │   ├── mobile/      # React Native app
│   │   └── e2e/         # End-to-end tests
│   └── dash/            # Dashboard application
│       ├── web/         # Next.js web app
│       ├── mobile/      # React Native app
│       ├── docs/        # Docusaurus documentation
│       └── e2e/         # End-to-end tests
├── ui/                  # Shared UI resources
│   ├── design/          # Design tokens and themes
│   ├── styles/          # Global styles and Tailwind config
│   ├── components/      # Shared UI components
│   └── libs/
│       └── storybook/   # Component documentation
└── libs/                # Other shared libraries
```

## Key Components

### Applications

1. **Archives App**
   - Web interface for managing and accessing archived content
   - Mobile companion app for on-the-go access

2. **AIChat App**
   - Web-based chat interface
   - Mobile app for messaging

3. **Dashboard App**
   - Administrative interface
   - Mobile dashboard for monitoring
   - Houses the project documentation

### Shared Resources

1. **UI Components**
   - Built with shadcn and React
   - Consistent design across all applications
   - Documented in Storybook

2. **Design System**
   - Shared design tokens
   - Common styling configurations
   - NativeWind setup for mobile apps

## Technology Stack

- **Framework**: NX Monorepo
- **Web Apps**: Next.js
- **Mobile Apps**: React Native with NativeWind
- **Documentation**: Docusaurus
- **Styling**: Tailwind CSS + shadcn
- **Testing**: Cypress (web) and Detox (mobile)

## Development Guidelines

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/loulibre/librepathrepo.git
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start a web application:
   ```bash
   nx serve web
   ```

### Working with the Monorepo

- Use NX commands for development tasks
- Follow the established folder structure
- Leverage shared components from the UI library
- Maintain consistency across platforms

### Best Practices

- Reuse UI components from the shared library
- Follow the established design system
- Write tests for new features
- Document significant changes

## Further Reading

- [NX Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org)
- [NativeWind Guide](https://www.nativewind.dev)
- [Docusaurus Documentation](https://docusaurus.io)