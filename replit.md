# Personal Portfolio - replit.md

## Overview

This is a Netflix-themed personal portfolio website for Manideep Daram, a Frontend Developer. The application showcases projects, skills, resume, and contact information with a professional design inspired by Netflix's UI. Built with React + Vite frontend and Express.js backend in a full-stack architecture.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom Netflix-inspired design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Responsive Design**: Mobile-first approach supporting mobile, tablet, and desktop

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: Hot reloading with tsx for TypeScript execution
- **API Structure**: RESTful API with `/api` prefix
- **Error Handling**: Centralized error middleware

### Design System
- **Primary Colors**: Black background (#000000), white text (#FFFFFF)
- **Accent Color**: Netflix red (#E50914) - defined as CSS custom property `--netflix-red`
- **Typography**: Inter font family for clean, modern appearance
- **Theme**: Dark theme with Netflix-inspired color palette
- **Component Library**: Consistent UI components using class-variance-authority

## Key Components

### Frontend Components
- **Portfolio**: Main component containing the entire portfolio layout
- **UI Components**: Comprehensive set of reusable components (Button, Card, Badge, etc.)
- **Responsive Navigation**: Mobile menu with smooth scrolling navigation
- **Hero Section**: Full-screen banner with background image and call-to-action buttons
- **Projects Carousel**: Horizontal scrolling showcase of portfolio projects
- **Skills Section**: Technical skills organized by category
- **Contact Integration**: Direct email links and social media connections

### Backend Components
- **Express Server**: Main application server with middleware stack
- **Routes Handler**: Modular route registration system
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema and CRUD operations
- **Static File Serving**: Integrated Vite development server

### Data Management
- **Schema Definition**: Drizzle ORM schema for user management
- **Database**: PostgreSQL configured (Neon serverless)
- **Migrations**: Drizzle migrations in `/migrations` directory
- **Storage Abstraction**: Interface-based storage with memory and database implementations

## Data Flow

1. **Development Mode**: Vite dev server handles frontend assets with HMR
2. **API Requests**: Frontend communicates with Express backend via `/api` routes
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Static Assets**: Resume PDF and project images served from `/public`
5. **Production Build**: Vite builds frontend, esbuild bundles backend

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development plugins

### UI/UX Libraries
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Hot Reloading**: Automatic server restart and frontend HMR
- **Port Configuration**: Server runs on port 5000, exposed on port 80
- **Parallel Workflows**: Concurrent development tasks

### Production Deployment
- **Build Process**: 
  1. `npm run build` - Vite builds frontend to `/dist/public`
  2. esbuild bundles server to `/dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **Static Assets**: Frontend served from `/dist/public`
- **Database**: PostgreSQL connection via environment variables

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Management**: PostgreSQL session store for production

## Changelog

- June 14, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.