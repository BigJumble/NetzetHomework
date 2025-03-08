# Homework Project

A Next.js application built for Netzet homework assignment.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js version 23.9.0 or higher
- npm version 11.1.0 or higher

### VSCode Extensions
For the best development experience, install these VSCode extensions:
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [LiveServer VSCode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Getting Started
Setup packages with `npm ci`

## Available Scripts

The project includes several npm scripts for development and building:

- `npm run dev` - Starts the development server using Next.js with Turbopack for faster development experience
- `npm run build` - Creates a production build of the application
- `npm run buildOut` - Creates a production build for LiveServer
- `npm run start` - Starts the production server after building
- `npm run lint` - Runs ESLint to check code quality and find potential issues

## Project Structure

The project is organized into several key directories under `src/`:

- `app/` - Contains the Next.js application routes and pages
- `components/` - Reusable React components
- `context/` - React context providers and related logic
- `plans/` - Contains data about subscription plans
- `utils/` - Utility functions and helpers
  - `path.ts` - Path manipulation and routing utilities

## Deployment

The project is configured for deployment to GitHub Pages using GitHub Actions. The deployment process utilizes the `ROUTE` environment variable, which is set to the repository name. This ensures assets and paths are correctly resolved when hosted on GitHub Pages.

The `next.config.ts` and `utils/path.ts` files handle the base path configuration automatically based on the `ROUTE` variable, ensuring all assets and links work correctly in the GitHub Pages environment.

