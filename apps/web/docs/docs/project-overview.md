---
sidebar_position: 2
---

# LibrePath Project Overview

LibrePath is a comprehensive private AI apps platform that unifies multiple applications and shared resources under a single, well-organized workspace that is designed to allow offline or online AI operations, across web, tablet, mobile.  Multiple applications can be run under the LibrePath workspace.  This document provides an overview of the project structure and architecture.  

## Project Structure

LibrePath is created as a monorepo - a single repository with multiple applications. The monorepo is organized with central resources and the following main directories:

```
LibrePath-repo  - (multiple app workspaces in a monorepo) 
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

1. **AIChat Agent App**
   - Web-based AI chat agent apps for web and tablet. 
   - Desktop AI chat agent app coming soon (electron)
   - Mobile AI chat agent apps for iOS and Android

2. **Archives App** 
   - Web-based file archive ingestion and scanning app
   - Desktop archiving app coming soon (electron)
   - Mobile archiving app for on-the-go access

3. **Dashboard App**
   - Productivity app for managing activities, tasks, projects
   - Desktop productivity app coming soon (electron)
   - Mobile productivity app
   - Project documentation with Docusaurus

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
   git clone https://github.com/librepath/librepathrepo.git
   ```

2. Install dependencies:
   ```bash
      pnpm install
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

Build the Monorepo:
```bash
nx run-many --target=build
```


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