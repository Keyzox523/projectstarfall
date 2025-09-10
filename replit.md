# Starfall - Fortnite Chapter 2 Season 2 Game Launcher

## Overview

Starfall is a gaming launcher application that recreates the Fortnite Chapter 2 Season 2 experience. The project is a full-stack web application featuring a React frontend with a modern gaming aesthetic and an Express.js backend. The application provides server status monitoring, download management, and community features for users wanting to experience this specific Fortnite season.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with a dark gaming theme featuring gold accents
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and effects
- **Design System**: Custom gaming-focused design with particles background and glow effects

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage Strategy**: In-memory storage implementation with interface for easy database migration
- **API Design**: RESTful endpoints for server status and download management
- **Session Management**: Express sessions with PostgreSQL store configuration
- **Development Setup**: Hot reload with Vite middleware integration

### Database Schema Design
- **Users Table**: Authentication with username/password storage
- **Server Status Table**: Real-time server monitoring with latency and player counts
- **Downloads Table**: Version management with file metadata and active status tracking
- **Schema Validation**: Zod schemas for type-safe data validation

### Development Workflow
- **TypeScript Configuration**: Shared types between frontend and backend via `shared/` directory
- **Build Process**: Separate build pipeline for client (Vite) and server (esbuild)
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`, `@assets/`)
- **Development Server**: Integrated Vite dev server with Express API proxy

## External Dependencies

### Database
- **Primary**: PostgreSQL (configured via Drizzle but currently using in-memory storage)
- **Connection**: Neon Database serverless adapter
- **Session Store**: connect-pg-simple for PostgreSQL session management

### UI Components
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for interactive elements

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development Environment**: Replit-specific plugins for error handling and debugging

### Runtime Features
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Utilities**: date-fns for time formatting
- **Validation**: Zod for runtime type checking
- **Carousel**: Embla Carousel for interactive components
- **Particles**: External particles.js library for background effects