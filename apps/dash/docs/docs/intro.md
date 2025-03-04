---
sidebar_position: 1
---

# Getting Started with LibrePath

Welcome to the LibrePath development documentation. This guide will help you set up and work with the LibrePath monorepo.

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
- [Yarn](https://yarnpkg.com/) package manager
- [Git](https://git-scm.com/) for version control

## Initial Setup

1. Clone the repository:

```bash
git clone https://github.com/loulibre/librepathrepo.git
```

2. Install dependencies:

```bash
yarn install
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
yarn start
```

### Documentation Development

Work on the documentation site:

```bash
cd apps/dash/docs
yarn start
```

## Project Structure

- `apps/` - Application-specific code
  - `web/` - Main web application
  - `mobile/` - Mobile applications
  - `docs/` - Documentation site
- `ui/` - Shared UI resources
  - `components/` - Reusable UI components
  - `design/` - Design tokens and assets
  - `styles/` - Shared styles

## Additional Resources

- [Project Overview](./project-overview.md)
- [GitHub Repository](https://github.com/loulibre/librepathrepo)
- [Development Guidelines](./project-overview.md#development-guidelines)
