# CLAUDE.md - Neodesign Project Guide

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build production assets
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Use strict typing with proper interfaces/types
- **Imports**: Group imports by type (React, Next.js, components, utils)
- **Components**: One component per file, use named exports
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use Tailwind with className prop, group related classes
- **Error Handling**: Use try/catch blocks, throw Error with descriptive messages
- **File Structure**: 
  - Use Next.js App Router conventions
  - Place reusable components in /components
  - Types in /types directory
  - Utility functions in /lib

## Patterns
- Use 'use client' at top of client components
- Leverage Framer Motion for animations
- shadcn/ui for component library
- Prefer async/await over Promises