# Portfolio Project Documentation

## Project Overview

This portfolio project is a modern, responsive personal website built with React and TypeScript showcasing a developer's skills, experience, and projects. The site features a sleek dark/light mode toggle, smooth page transitions, and interactive components.

## Tech Stack

### Core Technologies

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **React Router DOM** for navigation between pages
- **TailwindCSS 4** for styling

### UI Components

- **Radix UI** primitives for accessible components
- **Shadcn/UI** component library with the "New York" style variant
- **Lucide React** for SVG icons
- **React Icons** for additional icon sets

### Additional Libraries

- **Sonner** for toast notifications
- **React Scroll** for smooth scroll behavior
- **Class Variance Authority (CVA)** for component style variants

## Key Features

### Layout & Navigation

- Responsive layout with mobile and desktop views
- Smooth scrolling navigation with React Scroll
- Hamburger menu for mobile with animated transitions
- Page transitions using CSS animations via the `src/utils/pageTransition.ts` utility

### Theme System

- Dark/light mode toggle with persistent user preferences
- Theme preference stored in localStorage
- System preference detection as fallback
- Smooth theme transitions

### Projects Display

- Grid layout of project cards
- Detailed project pages with modules breakdown
- Image lightbox/dialog for project screenshots
- Animated hover effects

### Contact Form

- Form validation using native HTML validation
- Form submission via Formspree (https://formspree.io/f/xpwdqnaa)
- Success/error state management
- Toast notifications using Sonner

### Other Components

- Certificates display with modal preview
- Timeline-based experience section
- Technical skills organized by category
- Social media links integration

## Project Structure

```
src/
  ├── assets/           # Images and static assets
  ├── components/       # Reusable UI components
  │   ├── sections/     # Major page sections
  │   ├── ui/           # Basic UI components
  │   ├── navigation/   # Navigation components
  │   └── pages/        # Page layouts
  ├── data/             # Static data files
  ├── lib/              # Utility functions
  ├── types/            # TypeScript type definitions
  └── utils/            # Helper functions
```

## Key Implementation Details

### Page Transitions

Page transitions are handled by `handlePageTransition` utility in `src/utils/pageTransition.ts`. This adds a fade-out class before navigation and removes it afterward for a smooth transition between pages.

### Form Handling

The contact form in `src/components/sections/contact/ContactForm.tsx` uses:

- Native form validation with required attributes
- Formspree for serverless form submission
- State management for loading/success/error states
- Sonner toast for user feedback on submission

### Image Dialogs

Project images use a dialog component for expanded views, implemented in multiple components including `src/components/pages/ProjectDetail.tsx` and `src/components/sections/Projects.tsx`.

### Responsive Design

The site uses a mobile-first approach with Tailwind's responsive classes, featuring:

- Different layouts for mobile/desktop
- Collapsible mobile navigation menu
- Optimized image sizing for different viewports

Used it for tab icon to generate the favicon:
https://realfavicongenerator.net/favicon-generator/react/your-favicon-is-ready

## Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
