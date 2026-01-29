# Louisa Peslier-Dauzats - Chiropractor Website

## Overview

A professional website for a chiropractor practice based in Toulouse, France. The application serves as a business presence site featuring service information, testimonials, pricing, appointment booking integration, and a contact form for patient inquiries. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom medical/calming color palette (teal primary, sage secondary)
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll-reveal effects
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Typography**: Custom fonts - Outfit (display) and DM Sans (body)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Vite dev server with HMR integration for development
- **Production Build**: esbuild for server bundling, Vite for client bundling
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Static Serving**: Express static middleware serves built client assets in production

### Data Storage
- **Database**: PostgreSQL via `pg` driver
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit for schema management (`drizzle-kit push`)
- **Tables**:
  - `inquiries`: Contact form submissions (name, email, phone, message)
  - `testimonials`: Patient reviews (name, content, rating, approval status)

### Shared Code Architecture
- **Location**: `shared/` directory contains code used by both client and server
- **Schema**: Drizzle table definitions with Zod validation schemas via `drizzle-zod`
- **API Routes**: Type-safe route definitions in `shared/routes.ts`
- **Path Aliases**: `@shared/*` maps to shared directory for clean imports

### Build Configuration
- **TypeScript**: Strict mode with ESNext modules, bundler resolution
- **Path Aliases**: `@/*` for client source, `@shared/*` for shared code
- **Development**: `tsx` for TypeScript execution, Vite HMR for frontend
- **Production**: Combined esbuild (server) + Vite (client) build process

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: PostgreSQL session store (available but not currently used)

### External Services
- **Doctolib**: External appointment booking integration (linked via URLs, not API)
- **Google Fonts**: Outfit and DM Sans font loading
- **Google Maps**: Location linking for practice address

### Key NPM Packages
- **UI**: Full shadcn/ui component set with Radix UI primitives
- **Validation**: Zod for schema validation throughout the stack
- **Date Handling**: date-fns for date formatting
- **Carousel**: embla-carousel-react for testimonial display

### Spam Protection
- **Honeypot Field**: Contact form includes a hidden "website" field positioned off-screen
- **Backend Validation**: Server silently rejects submissions where honeypot field is filled (returns success to not alert bots)
- **Implementation**: Frontend adds field to form payload, backend checks before processing