# @teeboteebo/scrollable-flex-item

A lightweight React component that solves the common CSS flexbox scrolling problem. When you need a flex item to be scrollable within a dynamic height container, the standard approach often fails. This component provides a reliable solution.

## 🚀 [Live Demo](https://teeboteebo.github.io/scrollable-flex-item/)

See the interactive demo to understand the problem and how this component solves it.

---

## The Problem

When working with CSS flexbox layouts, a common challenge arises when you need a flex item to be scrollable within a dynamic height container. The standard approach of using `flex: 1` with `overflow: auto` often fails because the content grows beyond its container bounds.

### ❌ Broken Implementation
```tsx
<div style={{
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}}>
  <div>Header</div>
  
  {/* This breaks in flex layouts */}
  <div style={{ 
    flex: 1,
    overflow: 'auto' // Doesn't work properly!
  }}>
    <ul>
      {/* Long list of items */}
    </ul>
  </div>
  
  <div>Footer</div>
</div>
```

### ✅ Working Solution
```tsx
<div style={{
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}}>
  <div>Header</div>
  
  {/* This works perfectly! */}
  <ScrollableFlexItem>
    <ul>
      {/* Long list of items */}
    </ul>
  </ScrollableFlexItem>
  
  <div>Footer</div>
</div>
```

---

## Installation

```bash
npm install @teeboteebo/scrollable-flex-item
```

---

## Usage

```tsx
import React from "react";
import { ScrollableFlexItem } from "@teeboteebo/scrollable-flex-item";

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
        Header
      </header>
      
      <ScrollableFlexItem style={{ padding: '1rem' }}>
        {/* Your scrollable content */}
        <div>
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollableFlexItem>
      
      <footer style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
        Footer
      </footer>
    </div>
  );
}
```

---

## How It Works

**ScrollableFlexItem** solves this by using a combination of CSS properties that properly constrain the scrollable area within the flex layout:

```tsx
const ScrollableFlexItem: React.FC<ScrollableFlexItemProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        flex: 1,
        minHeight: 0,      // Key: allows flex shrinking
        position: 'relative',
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,          // Key: fills the container
          overflow: 'auto',  // Key: enables scrolling
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

### Key CSS Properties:
- **`minHeight: 0`** - Allows the flex item to shrink below its content size
- **`position: relative`** - Creates a positioning context for the inner container
- **`position: absolute` + `inset: 0`** - Makes the inner container fill the outer container exactly
- **`overflow: auto`** - Enables scrolling when content overflows

---

## API

### Props

The component accepts all standard `div` props plus:

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | The content to be rendered inside the scrollable container |
| `className` | `string` | CSS class name for the inner container |
| `style` | `React.CSSProperties` | Inline styles for the inner container |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Any other div attributes |

---

## Common Use Cases

- **Sidebar navigation** with long lists of items
- **Chat interfaces** with message history
- **Data tables** with many rows
- **Code editors** with syntax highlighting
- **Any flex layout** where you need reliable scrolling behavior

---

## TypeScript Support

This package is written in TypeScript and includes full type definitions out of the box.

```tsx
import { ScrollableFlexItem, ScrollableFlexItemProps } from '@teeboteebo/scrollable-flex-item';
```

---

## Browser Support

Works in all modern browsers that support CSS Flexbox and CSS Grid:
- Chrome/Chromium-based browsers
- Firefox
- Safari
- Edge

---

## License

MIT © [teeboteebo](https://github.com/teeboteebo)

---

## Links

- [📦 NPM Package](https://www.npmjs.com/package/@teeboteebo/scrollable-flex-item)
- [⭐ GitHub Repository](https://github.com/teeboteebo/scrollable-flex-item)
- [🚀 Live Demo](https://teeboteebo.github.io/scrollable-flex-item/)
