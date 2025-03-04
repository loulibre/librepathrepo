# LibrePath Monorepo Blueprint

## Introduction
The LibrePath Monorepo Blueprint is a comprehensive guide to setting up a unified NX workspace for Next.js web apps, React Native mobile apps with NativeWind, and a Docusaurus documentation site. This blueprint provides a structured approach to organizing and managing various LibrePath projects, ensuring consistency across platforms and enhancing development efficiency.  This is a work in progress.

## Phase 1: Core Monorepo Setup

First: **Initialize the LibrePath Workspace with NX workspace for monorepos:**

1. Clone or fork the LibrePath monorepo from:
https://github.com/loulibre/librepathrepo

This will provide you with the complete NX monorepo workspace setup.

   A. Check to see if the NextJS app runs using `nx serve web` (you must have nx cli)

   - If not already initialized by the starter, run:
     ```bash
     npx create-nx-workspace@latest librepath-monorepo --preset=next --packageManager=pnpm
     ```
   - Confirm that the project contains the `apps/`, `ui/`, and `libs/` folders.

2. **Establish the Folder Structure:**
   - Create the following key directories:
     - `apps/archives`, `apps/aichat`, `apps/dash`
       - Under each, add subfolders: `web`, `mobile`, and `e2e` (if needed).
     - Create a central `ui/` folder with subfolders: `design/`, `styles/`, `components/`, and `libs/storybook`.

```
LibrePath-monorepo/
├── apps/
│   ├── archives/       # Archives App
│   │   ├── web/       # Next.js app for Archives
│   │   ├── mobile/    # React Native (with NativeWind) project for Archives
│   │   └── e2e/       # (Optional) End-to-end tests for Archives
│   ├── aichat/        # AIChat App
│   │   ├── web/       # Next.js app for AIChat
│   │   ├── mobile/    # React Native (with NativeWind) project for AIChat
│   │   └── e2e/       # (Optional) End-to-end tests for AIChat
│   └── dash/          # Dashboard App
│       ├── web/       # Next.js Dashboard app for web
│       ├── mobile/    # React Native (with NativeWind) project for Dashboard
│       ├── docs/      # Docusaurus site for LibrePath Docs
│       └── e2e/       # (Optional) End-to-end tests for Dashboard
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

3. **Set Up Docusaurus Documentation:**
   - Initialize Docusaurus in the dash/docs directory:
     ```bash
     npx create-docusaurus@latest dash/docs classic --typescript
     ```
   - Configure docusaurus.config.ts with:
     - Set baseUrl to '/dash/docs/'
     - Update GitHub repository links
     - Customize site title and metadata

4. **Set Up Next.js Web Apps:**
   - Generate each web app using NX generators. For example, for the Dashboard:
     ```bash
     nx generate @nrwl/next:app dashboard --directory=dash/web --style=css
     ```

4. **Configure Central UI Assets:**
   - In `ui/design/`, create a file (e.g., `tokens.js`) to define your design tokens.
   - In `ui/styles/`, configure Tailwind CSS to extend using tokens from `ui/design/`.
   - In `ui/components/`, build shared UI components following shadcn design guidelines.
   - Create an NX library with Storybook support in `ui/libs/storybook/`:
     ```bash
     nx generate @nrwl/react:library storybook --directory=ui/libs --style=css --buildable
     nx generate @nrwl/react:storybook-configuration storybook --configureCypress --generateStories
     ```

5. **Configure the Docusaurus Docs Site:**
   - Under `apps/dash/docs/`, initialize a Docusaurus project:
     ```bash
     npx create-docusaurus@latest dash/docs classic --typescript
     ```
   - Name the site *LibrePath Docs* and configure its homepage at `/dash/docs/`.

---

## Phase 2: Additional Enhancements

1. **Set Up Mobile Projects with NativeWind:**
   - For each mobile project (e.g., `apps/dash/mobile`), set up a React Native project (using Expo or React Native CLI).
   - Install NativeWind:
     ```bash
     yarn add nativewind
     ```
   - Create a `nativewind.config.js` file in each mobile project that imports design tokens from `ui/design/`. For example:
     ```js
     // Example: apps/dash/mobile/nativewind.config.js
     const designTokens = require('../../../ui/design/tokens');

     module.exports = {
       content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
       theme: {
         extend: {
           colors: designTokens.colors,
           spacing: designTokens.spacing,
           fontFamily: designTokens.fontFamily,
         },
       },
       plugins: [],
     };
     ```
   - Update the mobile project’s Babel configuration to include the NativeWind plugin.

2. **Configure NX Library Imports:**
   - Use NX’s library import paths to share UI assets from `ui/`. For example, import shared components via:
     ```js
     import { Button } from '@librepath/ui-components';
     ```
   - This ensures consistency across web and mobile platforms.

3. **Integrate End-to-End Testing:**
   - Set up E2E tests (using Cypress for web and Detox for mobile) in the respective `e2e/` folders.

4. **Additional Services and CI/CD:**
   - Add further server-side services, linting, testing, and deployment pipelines as needed.

---

*This prompt serves as the comprehensive blueprint for building the LibrePath Monorepo—a unified NX workspace for Next.js web apps, React Native mobile apps with NativeWind, centralized UI assets, and a Docusaurus documentation site.*

---

## Resources

- **NX Documentation:** [https://nx.dev](https://nx.dev)
- **Next.js:** [https://nextjs.org](https://nextjs.org)
- **shadcn-nx-nextjs-boilerplate:** [https://github.com/anteqkois/shadcn-nx-nextjs-boilerplate](https://github.com/anteqkois/shadcn-nx-nextjs-boilerplate)
- **NativeWind:** [https://www.nativewind.dev/getting-started/using-with-monorepos](https://www.nativewind.dev/getting-started/using-with-monorepos)
- **Docusaurus:** [https://docusaurus.io](https://docusaurus.io)
- **Storybook for NX:** [https://nx.dev/nx-api/storybook](https://nx.dev/nx-api/storybook)