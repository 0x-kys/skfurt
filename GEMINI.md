# Project Overview

This is a [Next.js](https://nextjs.org/) project for an e-commerce website called "S.K. Wood Works", which appears to sell furniture. The project is bootstrapped with `create-next-app`.

The frontend is built with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/), and styled with [Tailwind CSS](https://tailwindcss.com/). It uses components from [shadcn/ui](https://ui.shadcn.com/) and icons from [Lucide React](https://lucide.dev/guide/packages/lucide-react).

The project is configured for deployment on [Cloudflare Pages](https://pages.cloudflare.com/) using [OpenNext](https://open-next.js.org/).

## Building and Running

### Development

To run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:

```bash
bun run build
```

### Linting

To run the linter:

```bash
bun run lint
```

### Deployment

The project can be deployed to Cloudflare. The following scripts are available:

*   `bun run preview`: Build and preview the app on Cloudflare
*   `bun run deploy`: Build and deploy the app to Cloudflare

## Development Conventions

*   **Components:** The project uses functional components with TypeScript. Components are organized in the `components` directory, with UI components from `shadcn/ui` in `components/ui`.
*   **Styling:** Styling is done using Tailwind CSS.
*   **Code Style:** The project uses ESLint for linting. The configuration is in `eslint.config.mjs`.
