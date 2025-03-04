# NeoDesign Component Documentation

This document provides detailed information about the core components in the NeoDesign project, their props, usage examples, and best practices.

## Table of Contents

- [UI Components](#ui-components)
  - [Button](#button)
  - [Card](#card)
  - [Input](#input)
  - [Form](#form)
- [Layout Components](#layout-components)
  - [Header](#header)
  - [Footer](#footer)
  - [BlogLayout](#bloglayout)
- [Section Components](#section-components)
  - [Hero](#hero)
  - [Services](#services)
  - [FeaturedWork](#featuredwork)
- [Blog Components](#blog-components)
  - [BlogCard](#blogcard)
  - [BlogGrid](#bloggrid)
  - [TableOfContents](#tableofcontents)
- [Project Components](#project-components)
  - [ProjectCard](#projectcard)
  - [ProjectHero](#projecthero)
  - [ProjectProcess](#projectprocess)
- [Accessibility Components](#accessibility-components)
  - [AccessibilityControls](#accessibilitycontrols)
- [MDX Components](#mdx-components)
  - [Callout](#callout)
  - [CustomLink](#customlink)
  - [ImageWithCaption](#imagewithcaption)

## UI Components

### Button

An enhanced button component with various styles, loading states, and icon support.

**File Location**: `components/ui/button-enhanced.tsx`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' \| 'gradient'` | `'default'` | The visual style of the button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon' \| 'pill'` | `'default'` | The size of the button |
| `isLoading` | `boolean` | `false` | Whether the button is in a loading state |
| `loadingText` | `string` | `undefined` | Text to display when button is loading |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `leftIcon` | `ReactNode` | `undefined` | Icon to display before button text |
| `rightIcon` | `ReactNode` | `undefined` | Icon to display after button text |
| `asChild` | `boolean` | `false` | Whether to render as child component (polymorphic) |

**Usage Example**:

```tsx
// Regular button
<Button>Click Me</Button>

// Button with variants
<Button variant="outline" size="lg">Large Outline Button</Button>

// Loading button
<Button isLoading loadingText="Submitting...">Submit</Button>

// Button with icons
<Button leftIcon={<Mail />}>Email Us</Button>

// Full width gradient button
<Button variant="gradient" fullWidth>Sign Up Now</Button>

// Polymorphic button (renders as a link)
<Button asChild>
  <Link href="/contact">Contact Us</Link>
</Button>
```

### Card

A versatile card component for containing content.

**File Location**: `components/ui/card.tsx`

**Components**:

- `Card` - The main container
- `CardHeader` - The top section of the card
- `CardTitle` - The title of the card
- `CardDescription` - A description below the title
- `CardContent` - The main content area
- `CardFooter` - The bottom section of the card

**Usage Example**:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Layout Components

### Header

The main site header with navigation.

**File Location**: `components/core/Header/Header.tsx`

**Components**:

- `Header` - The main header container
- `DesktopNav` - Desktop navigation menu
- `MobileNav` - Mobile navigation menu with slide-out drawer

**Usage Notes**:

- Navigation items are configured in `config/navigation.ts`
- Automatically handles responsive behavior for different screen sizes
- Includes support for dropdown menus and nested items

### BlogLayout

Layout specifically for blog pages with sidebar.

**File Location**: `components/blog/BlogLayout.tsx`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | (required) | The main content of the page |
| `currentPost` | `BlogPost \| undefined` | `undefined` | The current blog post (if viewing a post) |

**Usage Example**:

```tsx
<BlogLayout currentPost={post}>
  <article>Blog content goes here</article>
</BlogLayout>
```

## Blog Components

### BlogCard

Card component for displaying blog post previews.

**File Location**: `components/blog/BlogCard.tsx`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `post` | `BlogPost` | (required) | The blog post data to display |
| `index` | `number` | (required) | Index for staggered animations |

**Usage Example**:

```tsx
<BlogCard post={post} index={0} />
```

### TableOfContents

Displays a navigable table of contents for blog posts.

**File Location**: `components/blog/TableOfContents.tsx`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `toc` | `TableOfContentsItem[]` | (required) | Array of TOC items with nested structure |

**Usage Example**:

```tsx
<TableOfContents toc={[
  { id: 'intro', title: 'Introduction', level: 2 },
  { id: 'section1', title: 'First Section', level: 2, 
    children: [
      { id: 'subsection', title: 'Sub-section', level: 3 }
    ]
  }
]} />
```

## MDX Components

### Callout

A highlighted callout box for important information.

**File Location**: `components/mdx/Callout.tsx`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'info' \| 'warning' \| 'success' \| 'error'` | `'info'` | Type of callout |
| `title` | `string \| undefined` | `undefined` | Optional title for the callout |
| `children` | `ReactNode` | (required) | Content of the callout |

**Usage Example in MDX**:

```mdx
<Callout type="warning" title="Important">
  This is a warning message that readers should pay attention to.
</Callout>
```

### ImageWithCaption

Enhanced image component with caption support.

**File Location**: `components/mdx/Image.tsx`

**Props**:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | (required) | Image source URL |
| `alt` | `string` | (required) | Alt text for accessibility |
| `caption` | `string \| undefined` | `undefined` | Optional caption to display below image |

**Usage Example in MDX**:

```mdx
<Image 
  src="/images/example.jpg" 
  alt="Example image" 
  caption="This is a descriptive caption for the image" 
/>
```

## Accessibility Components

### AccessibilityControls

Controls for adjusting accessibility settings.

**File Location**: `components/accessibility/AccessibilityControls.tsx`

**Usage Notes**:

- Automatically included in the root layout
- Provides controls for:
  - Reduced motion toggle
  - High contrast toggle
  - Font size adjustment
- Settings are saved to localStorage for persistence

## Best Practices

### Component Design

1. **Single Responsibility Principle**
   - Each component should do one thing well
   - Break complex components into smaller, reusable pieces

2. **Prop Typing**
   - Always define proper TypeScript interfaces for props
   - Use descriptive names for props and interfaces

3. **Default Props**
   - Provide sensible defaults when possible
   - Document required props clearly

4. **Error Handling**
   - Implement proper error boundaries for component sections
   - Add fallback UI for failed components

### Accessibility

1. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Maintain proper focus order and management

2. **ARIA Attributes**
   - Use appropriate ARIA roles, states, and properties
   - Test with screen readers regularly

3. **Color Contrast**
   - Maintain WCAG AA contrast ratios at minimum
   - Test with high contrast mode enabled

### Performance

1. **Code Splitting**
   - Use dynamic imports for large components
   - Lazy load below-the-fold content

2. **Memoization**
   - Use React.memo for components that render often
   - Use useMemo and useCallback hooks appropriately

3. **Image Optimization**
   - Always use next/image component for images
   - Specify proper sizes and priority attributes

## Adding New Components

When adding new components to the project:

1. Create the component file in the appropriate directory
2. Define proper TypeScript interfaces for props
3. Implement the component following project patterns
4. Add unit tests for the component
5. Update this documentation with component details
6. Follow existing naming conventions and structure

## Component Testing

All components should have appropriate tests:

```tsx
// Example component test
import { render, screen } from '@/lib/test-utils';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  
  // Add more test cases
});
```