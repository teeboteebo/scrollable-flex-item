# @jesperasplund/scrollable-flex-item

A lightweight React component that provides a scrollable flex item for flexible layouts.

---

## Installation

```bash
npm install @jesperasplund/scrollable-flex-item
```

---

## Usage

```tsx
import React from "react";
import { ScrollableFlexItem } from "@jesperasplund/scrollable-flex-item";

export default function Example() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-blue-500 text-white">Header</header>
      <ScrollableFlexItem className="bg-gray-100">
        <div style={{ height: "200vh" }}>Scrollable Content</div>
      </ScrollableFlexItem>
      <footer className="p-4 bg-blue-500 text-white">Footer</footer>
    </div>
  );
}
```
