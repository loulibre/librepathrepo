# LibrePath Monorepo

A unified monorepo for LibrePath projects, built with NX workspace, Next.js, React Native, and Docusaurus.

## Project Overview

The LibrePath Monorepo is a comprehensive development workspace that houses multiple applications and shared resources:

### Applications
- **Archives**: Web and mobile applications for archival management
- **AIChat**: Intelligent chat applications for web and mobile platforms
- **Dashboard**: Administrative interface with web and mobile versions
- **Documentation**: Comprehensive documentation site built with Docusaurus

### Key Features
- NX workspace for efficient monorepo management
- Private AI development environment
- Shared UI components and design system
- Cross-platform development (Web + Mobile)
- Integrated documentation
- Unified testing and deployment pipelines
- Secure dependency management

### Tech Stack
- **Build System (NX monorepo - multiple apps, single repo) **: NX
- **Web Framework**: Next.js
- **Mobile Framework**: React Native with NativeWind
- **Documentation**: Docusaurus
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS

## Repository Structure

```
LibrePath-monorepo/
├── apps/
│   ├── archives/     # Archive management applications
│   ├── aichat/       # AI-powered chat applications
│   └── dash/         # Administrative dashboard
├── ui/
│   ├── design/       # Design tokens and system
│   ├── styles/       # Global styles and Tailwind config
│   ├── components/   # Shared UI components
│   └── libs/         # UI-related libraries
└── libs/            # Shared utilities and functions
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/librepath/librepathrepo.git
cd librepathrepo
```

2. Install dependencies:
```bash
yarn install
```

3. Start development:
```bash
# For web applications
nx serve web

# For documentation site
nx serve dash-docs
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions and support, please open an issue in the repository.