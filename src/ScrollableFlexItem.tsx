import React from "react";

export type ScrollableFlexItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const ScrollableFlexItem: React.FC<ScrollableFlexItemProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flex: 1,
        minHeight: 0,
        position: "relative",
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};