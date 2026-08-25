# Tennis Dashboard

A responsive tennis dashboard built from the **Project For Showcase** Figma screen. The implementation focuses on visual fidelity, clean component boundaries, accessible interactions, and a production-oriented data-fetching architecture.

## Live Demo

[https://tennis-topaz-xi.vercel.app](https://tennis-topaz-xi.vercel.app)


## Design Reference

[Dashboard Tennis — Community](https://www.figma.com/design/d7s9PsFoX1KyJD0VzT9jlj/Dashboard-Tennis--Community-?node-id=1-4)

## Features

- Figma-accurate desktop dashboard
- Responsive tablet and mobile layouts
- Animated mobile navigation drawer
- Route-based dashboard navigation with active states
- Dynamic Live Score card backed by an internal Next.js API
- Loading, error, retry, caching, and request-cancellation handling
- Interactive yearly statistics with distinct datasets
- Animated bar and donut charts rendered with SVG
- Functional Latest Scores category tabs
- Accessible labels, focus states, and keyboard navigation

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Axios
- TanStack Query 5

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Redirects to `/score` |
| `/score` | Main tennis score dashboard |
| `/all-games` | All Games placeholder page |
| `/live-games` | Live Games placeholder page |
| `/categories` | Categories placeholder page |
| `/video` | Video placeholder page |
| `/statistic` | Statistic placeholder page |

The dashboard routes share a common App Router layout, keeping the sidebar and header consistent while route content changes through client-side navigation.

## Live Score API

```http
GET /api/v1/live-score
```

The endpoint returns typed in-memory match data and does not require a database or external service.

The frontend follows a focused three-layer data flow:

```text
Axios instance
  → Live Score API service
  → TanStack Query custom hook
  → Live Score component
```

This keeps transport configuration, endpoint access, query state, and presentation concerns separate.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route automatically redirects to the Score dashboard.

No environment variables are required for local development.

## Available Scripts

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npx tsc --noEmit  # Run the TypeScript compiler without emitting files
npm run build     # Create a production build
npm run start     # Start the production server
```

## Project Structure

```text
src/
├── app/
│   ├── (dashboard)/        # Shared dashboard layout and route pages
│   ├── api/v1/live-score/  # Versioned internal API route
│   └── providers.tsx       # Application-level query provider
├── components/dashboard/   # Dashboard sections and visual components
├── hooks/                  # TanStack Query hooks
├── lib/                    # Shared configuration and in-memory data
├── services/               # API service layer
└── types/                  # Shared TypeScript contracts

public/assets/dashboard/    # Figma-exported dashboard assets
```

## Production Validation

Before deployment, run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

After deploying to Vercel, verify the dashboard routes, direct page refreshes, static assets, and `GET /api/v1/live-score` on the deployed domain.
