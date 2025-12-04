# Pure Essence - Design Guidelines

## Visual Design System

### Color Palette

**Primary Colors**
- Primary: `#1a1a1a` - Main text and headings
- Secondary: `#4a4a4a` - Secondary text
- Accent: `#2c2c2c` - Interactive elements

**Neutral Palette**
- Background: `#ffffff` - Primary background
- Background Subtle: `#fafafa` - Secondary background
- Background Muted: `#f5f5f5` - Tertiary background
- Border: `#e5e5e5` - Default borders
- Border Light: `#f0f0f0` - Subtle borders

**Text Hierarchy**
- Text Primary: `#1a1a1a` - Headings and important text
- Text Muted: `#6b6b6b` - Secondary information
- Text Light: `#9a9a9a` - Tertiary information

### Typography

**Font Family**
- System Font Stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

**Type Scale**
- Display: 60px / 48px (Desktop / Mobile)
- Heading 1: 48px / 40px
- Heading 2: 36px / 32px
- Heading 3: 30px / 24px
- Heading 4: 24px / 20px
- Body Large: 20px / 18px
- Body: 16px
- Body Small: 14px
- Caption: 12px

**Font Weights**
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Line Heights**
- Tight: 1.2 (for headings)
- Normal: 1.5 (for body text)
- Relaxed: 1.75 (for large text blocks)

**Letter Spacing**
- Tight: -0.02em (for large headings)
- Normal: 0
- Wide: 0.025em (for labels)

### Spacing System

**8-Point Grid System**
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 32px
- XL: 48px
- 2XL: 64px
- 3XL: 96px
- 4XL: 128px

**Section Spacing**
- Desktop: 96px (top/bottom)
- Mobile: 64px (top/bottom)

**Container**
- Max Width: 1200px
- Padding: 32px (desktop) / 24px (mobile)

### Border Radius

- Small: 4px
- Medium: 8px
- Large: 12px
- Extra Large: 16px
- Full: 9999px (pills/circles)

### Shadows

**Elevation System**
- SM: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- MD: `0 4px 6px -1px rgba(0, 0, 0, 0.05)`
- LG: `0 10px 15px -3px rgba(0, 0, 0, 0.05)`
- XL: `0 20px 25px -5px rgba(0, 0, 0, 0.05)`

### Animation & Transitions

**Duration**
- Fast: 150ms
- Base: 250ms
- Slow: 350ms

**Easing**
- Default: `ease`

### Component Guidelines

#### Buttons
- Primary: Dark background (#1a1a1a), white text
- Secondary: Border style with dark border and text
- Padding: 16px 32px (large), 10px 24px (medium)
- Border Radius: Full (9999px) for pill-shaped buttons
- Hover: Slight opacity or background color change

#### Cards
- Background: White or subtle gray (#fafafa)
- Border Radius: 16px
- Shadow: MD on hover, SM at rest
- Padding: 32px

#### Icons
- Size: 16px, 20px, 24px, 32px
- Weight: 2px stroke
- Style: Rounded corners, minimalist

#### Images
- Border Radius: 16px for product images
- Aspect Ratio: 1:1 (square) for product cards, 16:9 for hero images
- Object Fit: Cover

### Layout Principles

#### Grid System
- 12-column grid on desktop
- 4-column grid on mobile
- Gutter: 32px (desktop), 16px (mobile)

#### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

#### White Space
- Use generous white space for clarity
- Maintain consistent vertical rhythm using 8pt grid
- Balance content with breathing room

### Design Principles

1. **Minimalism First**
   - Remove unnecessary elements
   - Focus on essential content
   - Let white space guide the eye

2. **Clarity**
   - Clear visual hierarchy
   - Obvious interactive elements
   - Predictable navigation patterns

3. **Consistency**
   - Uniform spacing throughout
   - Consistent component styling
   - Predictable interactions

4. **Quality**
   - High-quality imagery
   - Crisp typography
   - Smooth transitions

5. **Accessibility**
   - WCAG 2.1 AA compliant contrast ratios
   - Clear focus states
   - Semantic HTML structure
   - Keyboard navigation support

### Mobile-First Approach

- Design for mobile screens first
- Progressive enhancement for larger screens
- Touch-friendly tap targets (minimum 44x44px)
- Readable text without zooming (minimum 16px)
- Simplified navigation for mobile
- Optimized images for performance
