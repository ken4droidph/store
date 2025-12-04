# Pure Essence - Technical Guidelines

## Technology Stack

### Core Framework
- **React**: 18.3.1 - UI library
- **TypeScript**: 5.8.3 - Type safety
- **Vite**: 7.0.0 - Build tool
- **Tailwind CSS**: 3.4.17 - Utility-first CSS

### Additional Libraries
- **React Router DOM**: 6.30.1 - Client-side routing
- **Zustand**: 4.4.7 - State management
- **Lucide React**: Icon library
- **Framer Motion**: 11.0.8 - Animations

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── Benefits.tsx
│   ├── SocialProof.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── data/            # Mock data and constants
│   └── mockData.ts
├── types/           # TypeScript type definitions
│   └── product.ts
├── styles/          # Global styles and tokens
│   └── tokens.css
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global CSS imports

public/
└── assets/          # Static assets (images, fonts, etc.)

docs/                # Documentation
├── DESIGN_GUIDELINES.md
├── TECHNICAL_GUIDELINES.md
└── WIREFRAME.md
```

## Component Architecture

### Component Structure
- Functional components with React Hooks
- TypeScript for type safety
- Props interfaces defined in component files
- Single responsibility principle

### Component Example
```tsx
interface ComponentProps {
  data: DataType;
  onAction?: () => void;
}

const Component = ({ data, onAction }: ComponentProps) => {
  // Component logic
  return (
    <div className="container">
      {/* Component JSX */}
    </div>
  );
};

export default Component;
```

## Styling Guidelines

### Tailwind CSS Classes
- Use utility classes for styling
- Create custom utilities in `index.css` when needed
- Follow mobile-first approach with responsive modifiers

### Common Patterns
```tsx
// Responsive spacing
className="py-20 lg:py-32"

// Container pattern
className="container mx-auto px-4 lg:px-8"

// Hover effects
className="hover:bg-gray-800 transition-colors"

// Grid layouts
className="grid md:grid-cols-3 gap-8"
```

### CSS Variables
- Design tokens defined in `src/styles/tokens.css`
- Use CSS custom properties for consistency
- Import in `index.css`

## State Management

### Local State
- Use `useState` for component-specific state
- Use `useReducer` for complex state logic

### Global State (if needed)
- Zustand for lightweight global state
- Keep state structure flat and normalized
- Co-locate state with features when possible

## TypeScript Guidelines

### Type Definitions
- Define interfaces in `src/types/`
- Use interfaces for object shapes
- Use type aliases for unions and intersections

### Best Practices
```typescript
// ✅ Good: Explicit interface
interface Product {
  id: string;
  name: string;
  price: number;
}

// ✅ Good: Typed props
interface ComponentProps {
  product: Product;
  onSelect: (id: string) => void;
}

// ✅ Good: Type inference
const products = data.products; // Type inferred

// ❌ Avoid: any type
const data: any = fetchData(); // Use proper typing
```

## Performance Optimization

### Code Splitting
- Lazy load route components
- Use dynamic imports for heavy components

### Image Optimization
- Use appropriate image formats (WebP with fallbacks)
- Implement lazy loading for images
- Optimize image sizes for different viewports

### React Optimization
- Use `React.memo` for expensive components
- Memoize callbacks with `useCallback`
- Memoize computed values with `useMemo`

## Build & Deployment

### Development
```bash
npm install      # Install dependencies
npm run dev      # Start dev server (port 5173)
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

### Build Output
- Output directory: `dist/`
- Optimized bundles with code splitting
- Minified CSS and JavaScript
- Source maps for debugging

## Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML elements
- ARIA labels when needed
- Keyboard navigation support
- Focus management
- Color contrast ratios

### Best Practices
```tsx
// ✅ Good: Semantic HTML
<button onClick={handleClick}>Click me</button>

// ✅ Good: Alt text for images
<img src="image.jpg" alt="Product description" />

// ✅ Good: ARIA label
<button aria-label="Close menu" onClick={close}>
  <X />
</button>

// ❌ Avoid: Non-semantic elements
<div onClick={handleClick}>Click me</div>
```

## Code Quality

### ESLint & Prettier
- Follow project ESLint configuration
- Use Prettier for code formatting
- Run linting before commits

### Git Workflow
- Write clear commit messages
- Keep commits focused and atomic
- Use feature branches for new work

### Code Review Checklist
- [ ] Code follows TypeScript best practices
- [ ] Components are properly typed
- [ ] Styling follows design system
- [ ] Accessible markup and ARIA attributes
- [ ] No console.log statements in production
- [ ] Responsive design tested on multiple devices
- [ ] Build succeeds without errors or warnings

## Testing (Future Implementation)

### Unit Tests
- Test utility functions
- Test component logic
- Test state management

### Integration Tests
- Test component interactions
- Test routing behavior
- Test API integration

### E2E Tests
- Test critical user flows
- Test responsive behavior
- Test accessibility

## API Integration (Future Implementation)

### Data Fetching
- Use React Query or SWR for data fetching
- Implement proper error handling
- Add loading states
- Cache responses when appropriate

### Error Handling
- User-friendly error messages
- Retry logic for failed requests
- Fallback UI for errors

## Environment Variables

```env
VITE_API_URL=your_api_url
VITE_APP_NAME=Pure Essence
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2015+ features
- No IE11 support required

## Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90
- Bundle Size: < 200KB (gzipped)
