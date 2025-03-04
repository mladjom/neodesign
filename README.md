# NeoDesign - Modern Web Agency Portfolio

A Next.js portfolio/agency website built with modern web technologies featuring a responsive design, blog system, project showcases, and more.

![NeoDesign Screenshot](public/og.jpg)

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with fully responsive layouts
- **Blog System**: Full-featured blog with categories, tags, and author pages
- **Project Showcase**: Portfolio of projects with detailed case studies
- **Accessibility**: Enhanced accessibility features including reduced motion, high contrast, and text sizing options
- **Dark Mode**: Complete dark mode support with system preference detection
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **SEO Ready**: Metadata, Open Graph, and structured data for better search rankings
- **Form Handling**: Validated contact form with server-side processing

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/neodesign.git
   cd neodesign
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file based on `.env.example`
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
neodesign/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── blog/             # Blog pages
│   ├── projects/         # Project pages
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── contact/          # Contact page
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── blog/             # Blog components
│   ├── projects/         # Project components
│   ├── sections/         # Page section components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── accessibility/    # Accessibility components
│   └── core/             # Core layout components
├── config/               # Configuration files
├── content/              # MDX content (blog posts, etc.)
├── data/                 # Data files (projects, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # React context providers
├── public/               # Static assets
├── styles/               # Global CSS
└── types/                # TypeScript type definitions
```

## Architecture & Design Patterns

### Component Design

- **UI Components**: Base-level, highly reusable UI components using shadcn/ui
- **Layout Components**: Page layout and structure components
- **Section Components**: Feature-specific sections for pages
- **Page Components**: Full page components in the App Router

### State Management

- **React Context**: Used for global state (theme, accessibility)
- **React Hooks**: Custom hooks for specific functionality
- **Server Components**: Leveraging Next.js App Router for server-side data fetching

### Data Fetching

- **Server Components**: Data fetching in server components for static and dynamic data
- **API Routes**: Server-side API routes for form submissions
- **Content Management**: MDX-based content management with front matter

## Styling System

This project uses Tailwind CSS with a custom theme configuration:

- **Base Styles**: Set in `styles/globals.css`
- **Components**: Using shadcn/ui for consistent UI components
- **Animations**: Framer Motion for enhanced animations
- **Dark Mode**: Theme toggle with system preference detection
- **Accessibility**: High contrast mode and font size adjustments

## Customization

### Tailwind Theme

Customize the Tailwind theme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
      // Add custom colors here
    },
    // Add custom spacing, typography, etc.
  }
}
```

### Adding New Pages

1. Create a new directory in the `app` directory
2. Add a `page.tsx` file with the page component
3. Update navigation in `config/navigation.ts` to include the new page

### Adding New Blog Posts

1. Create a new MDX file in `content/blog/`
2. Add front matter with required metadata (title, date, excerpt, etc.)
3. Write your content using Markdown and custom MDX components

### Adding New Projects

1. Create a new MDX file in `data/projects/`
2. Add front matter with project details (title, client, technologies, etc.)
3. Write the project case study using Markdown and custom MDX components

## Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

### Testing Strategy

- **Unit Tests**: Testing individual components and utility functions
- **Integration Tests**: Testing component interactions
- **E2E Tests**: (Coming soon) End-to-end testing with Cypress

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy on Vercel

The easiest way to deploy this project is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fneodesign)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Style Guidelines

- **TypeScript**: Use strict typing with proper interfaces/types
- **Imports**: Group imports by type (React, Next.js, components, utils)
- **Components**: One component per file, use named exports
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use Tailwind with className prop, group related classes
- **Error Handling**: Use try/catch blocks, throw Error with descriptive messages

## Performance Optimization

The project implements several performance optimization techniques:

- **Code Splitting**: Dynamic imports for below-the-fold components
- **Image Optimization**: Next.js Image component for optimal loading
- **Font Optimization**: Web fonts with proper loading strategies
- **Server Components**: Using Next.js App Router server components for data-heavy pages
- **Caching**: Implementing proper caching strategies for data and assets

## Accessibility Features

This project prioritizes accessibility with:

- **ARIA Attributes**: Proper ARIA roles and attributes throughout components
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Reduced Motion**: Option to disable animations for users with vestibular disorders
- **High Contrast**: High contrast mode for users with visual impairments
- **Text Resizing**: Font size controls for better readability
- **Form Validation**: Clear error messages and form validation feedback

## Browser Support

The project is tested and supports the following browsers:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [MDX](https://mdxjs.com/) - Markdown for the component era
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## Contact

If you have any questions or feedback, please reach out to us at [hello@neodesign.com](mailto:hello@neodesign.com).