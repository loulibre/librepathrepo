---
sidebar_position: 1
---
LibrePath: Your Path to Private AI Productivity

# Getting Started with LibrePath

Welcome to the LibrePath development documentation. This guide will help you set up and work with the LibrePath Private AI App and Platform.


## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
- [pnpm](https://pnpm.io/installation) package manager
- [Git](https://git-scm.com/) for version control

## Initial Setup

1. Clone the repository:

```bash
git clone https://github.com/librepath/librepathrepo.git
```

2. Install dependencies:

```bash
pnpm install
```

## Development Commands

### Web Development

Start the web application development server:

```bash
nx serve web
```

### Mobile Development

Start a mobile application:

```bash
cd apps/[app-name]/mobile
pnpm start
```

### Documentation Development

Work on the documentation site:

```bash
cd apps/dash/docs
pnpm start
```

## Project Structure

```
LibrePath-repo/  (multiple app workspaces in a monorepo)
├── apps/
for AIChat App (AI Agents) 
│   └── aichat/        # AI Chat Agent App
│       ├── web/       # Next.js Dashboard app for AI web project
│       ├── mobile/    # React Native (NativeWind) AI mobile apps 
│       └── e2e/       # (Optional) End-to-end tests for AIChat
for Archives App (.zip, files, PDFs, images, etc)
│   ├── archives/       # Archives App
│   │   ├── web/       # Next.js app for Archives project
│   │   ├── mobile/    # React Native (with NativeWind) Archives mobile apps 
│   │   └── e2e/       # (Optional) End-to-end tests for Archives
for Dashboard App (Productivity Dashboard) 
│   ├── dash/          # Productivity Dashboard App
│   │   ├── web/       # Next.js app for Dashboard web project
│   │   ├── mobile/    # React Native (with NativeWind) Dashboard mobile apps
│       ├── docs/      # Docusaurus site for LibrePath Docs (Docusaurus project)
│       └── e2e/       # (Optional) End-to-end tests for Dashboard
for central design, styles, and components across all apps
├── ui/
│   ├── design/        # Shared design tokens (colors, spacing, fonts, etc.)
│   ├── styles/        # Global Tailwind CSS and shadcn-react configurations
│   ├── components/    # Shared UI components (built with shadcn) using NX libraries
│   └── libs/
│       └── storybook/ # NX library for Storybook integration (component docs/testing)
├── libs/              # (Optional) Other shared libraries across the monorepo
├── prompt.md          # Blueprint prompt for LibrePath Monorepo
└── readme.md          # Instructions on initializing and working with the project
```

## Additional Resources

- [Project Overview](./project-overview.md)
- [GitHub -Librepath](https://github.com/librepath/librepathrepo)
- [Development Guidelines](./project-overview.md#development-guidelines)
