import React, { useState } from "react";
import { ScrollableFlexItem } from "./ScrollableFlexItem";

const App: React.FC = () => {
  const [containerHeight, setContainerHeight] = useState(400);

  const handleResize = (e: React.MouseEvent) => {
    const startY = e.clientY;
    const startHeight = containerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const newHeight = Math.max(200, startHeight + (e.clientY - startY));
      setContainerHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const BrokenBox: React.FC = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        border: "1px solid #ff6b6b",
        borderRadius: "4px",
        backgroundColor: "#1a1a1a",
        color: "#e0e0e0",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#ff6b6b",
          color: "#000",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "0.5px",
        }}
      >
        WITHOUT ScrollableFlexItem ❌
      </div>

      {/* Content that breaks flex layout */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          padding: "8px",
          overflow: "auto", // This doesn't work properly in flex context
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontFamily: "monospace",
            fontSize: "13px",
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <li
              key={i}
              style={{
                padding: "8px 12px",
                margin: "4px 0",
                backgroundColor: "#2a2a2a",
                border: "1px solid #ff6b6b33",
                borderRadius: "2px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Item {i + 1}</span>
              <span style={{ color: "#ff6b6b" }}>BROKEN</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "8px 16px",
          backgroundColor: "#333",
          borderTop: "1px solid #ff6b6b33",
          fontSize: "12px",
          color: "#888",
        }}
      >
        Footer gets pushed down
      </div>
    </div>
  );

  const FixedBox: React.FC = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #00ff88",
        borderRadius: "4px",
        backgroundColor: "#1a1a1a",
        color: "#e0e0e0",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#00ff88",
          color: "#000",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "0.5px",
        }}
      >
        WITH ScrollableFlexItem ✅
      </div>

      {/* Properly scrollable content */}
      <ScrollableFlexItem style={{ padding: "8px" }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontFamily: "monospace",
            fontSize: "13px",
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <li
              key={i}
              style={{
                padding: "8px 12px",
                margin: "4px 0",
                backgroundColor: "#2a2a2a",
                border: "1px solid #00ff8833",
                borderRadius: "2px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Item {i + 1}</span>
              <span style={{ color: "#00ff88" }}>
                0x{(i * 16).toString(16).padStart(4, "0")}
              </span>
            </li>
          ))}
        </ul>
      </ScrollableFlexItem>

      {/* Footer */}
      <div
        style={{
          padding: "8px 16px",
          backgroundColor: "#333",
          borderTop: "1px solid #00ff8833",
          fontSize: "12px",
          color: "#888",
        }}
      >
        Footer stays in place
      </div>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        padding: "40px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#e0e0e0",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          ScrollableFlexItem Demo
        </h1>
        <p
          style={{
            color: "#888",
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "16px",
          }}
        >
          Drag the bottom edge to resize the container vertically
        </p>
        {/* Links Section */}
        
          <h2
            style={{
              textAlign: "center",
              margin: 0,
              color: "#e0e0e0",
              marginBottom: "20px",
            }}
          >
            Getting Started
          </h2>
        <div
          style={{
            marginBottom: "40px",
            padding: "32px",
            backgroundColor: "#161b22",
            border: "1px solid #333",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.npmjs.com/package/@teeboteebo/scrollable-flex-item"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#cb3837",
                color: "white",
                minWidth: "200px",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "14px",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#a02e2e";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#cb3837";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              📦 View on NPM
            </a>

            <a
              href="https://github.com/teeboteebo/scrollable-flex-item"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#238636",
                color: "white",
                minWidth: "200px",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "14px",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a6f2b";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#238636";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ⭐ GitHub Repository
            </a>
          </div>

          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#0d1117",
              border: "1px solid #21262d",
              borderRadius: "6px",
              fontSize: "14px",
              color: "#7d8590",
            }}
          >
            <strong style={{ color: "#e0e0e0" }}>Installation:</strong>
            <br />
            <code
              style={{
                display: "inline-block",
                marginTop: "8px",
                padding: "8px 12px",
                backgroundColor: "#161b22",
                border: "1px solid #30363d",
                borderRadius: "4px",
                fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
                color: "#00ff88",
              }}
            >
              npm install @teeboteebo/scrollable-flex-item
            </code>
          </div>
        </div>
        {/* Description Section */}
        <div style={{ marginTop: "60px", marginBottom: "40px" }}>
          <h2
            style={{
              color: "#e0e0e0",
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            The Problem & Solution
          </h2>
          <div
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #333",
              borderRadius: "8px",
              padding: "24px",
              lineHeight: "1.6",
            }}
          >
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              When working with CSS flexbox layouts, a common challenge arises
              when you need a flex item to be scrollable within a dynamic height
              container. The standard approach of using{" "}
              <code
                style={{
                  backgroundColor: "#0d1117",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  color: "#ff6b6b",
                  fontFamily: "Monaco, monospace",
                }}
              >
                flex: 1
              </code>{" "}
              with{" "}
              <code
                style={{
                  backgroundColor: "#0d1117",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  color: "#ff6b6b",
                  fontFamily: "Monaco, monospace",
                }}
              >
                overflow: auto
              </code>{" "}
              often fails because the content grows beyond its container bounds.
            </p>
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "#00ff88" }}>ScrollableFlexItem</strong>{" "}
              solves this by using a combination of CSS properties that properly
              constrain the scrollable area within the flex layout. The
              component uses{" "}
              <code
                style={{
                  backgroundColor: "#0d1117",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  color: "#00ff88",
                  fontFamily: "Monaco, monospace",
                }}
              >
                minHeight: 0
              </code>
              ,{" "}
              <code
                style={{
                  backgroundColor: "#0d1117",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  color: "#00ff88",
                  fontFamily: "Monaco, monospace",
                }}
              >
                position: relative
              </code>
              , and{" "}
              <code
                style={{
                  backgroundColor: "#0d1117",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  color: "#00ff88",
                  fontFamily: "Monaco, monospace",
                }}
              >
                position: absolute
              </code>{" "}
              techniques to create a reliable scrolling behavior.
            </p>
            <p
              style={{
                color: "#888",
                fontSize: "14px",
                fontStyle: "italic",
              }}
            >
              Resize the container below to see how the left example breaks
              while the right example maintains proper scrolling behavior.
            </p>
          </div>
        </div>

        {/* Examples section */}
        <div
          style={{
            position: "relative",
            height: `${containerHeight}px`,
            border: "2px solid #333",
            borderRadius: "8px",
            backgroundColor: "#161b22",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header for the demo */}
          <div
            style={{
              padding: "16px",
              backgroundColor: "#21262d",
              borderBottom: "1px solid #333",
              color: "#e0e0e0",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            FLEX CONTAINER - Dynamic Height Demo
          </div>

          {/* Container content - this is the flex: 1 area that causes the problem */}
          <div
            style={{
              display: "flex",
              flex: 1, // This makes it dynamic height!
              gap: "1px",
              minHeight: 0, // Important for proper flex behavior
            }}
          >
            <div style={{ flex: 1 }}>
              <BrokenBox />
            </div>
            <div style={{ flex: 1 }}>
              <FixedBox />
            </div>
          </div>

          {/* Resize handle */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "8px",
              backgroundColor: "#333",
              cursor: "row-resize",
              borderTop: "1px solid #444",
            }}
            onMouseDown={handleResize}
          />
        </div>

        {/* Code Examples Section */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: "40px",
            }}
          >
            {/* Broken Example */}
            <pre
              style={{
                backgroundColor: "#161b22",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "16px",
                overflow: "auto",
                fontSize: "12px",
                lineHeight: "1.5",
                color: "#e0e0e0",
                fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
              }}
            >
              {`<div style={{
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}}>
  <div>Header</div>
  
  {/* ❌ This breaks in flex layouts */}
  <div style={{ 
    flex: 1,
    overflow: 'auto' // Doesn't work properly!
  }}>
    <ul>
      {/* Long list of items */}
    </ul>
  </div>
  
  <div>Footer</div>
</div>`}
            </pre>

            {/* Fixed Example */}

            <pre
              style={{
                backgroundColor: "#161b22",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "16px",
                overflow: "auto",
                fontSize: "12px",
                lineHeight: "1.5",
                color: "#e0e0e0",
                fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
              }}
            >
              {`<div style={{
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}}>
  <div>Header</div>
  
  {/* ✅ This works perfectly! */}
  <ScrollableFlexItem>
    <ul>
      {/* Long list of items */}
    </ul>
  </ScrollableFlexItem>
  
  <div>Footer</div>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
