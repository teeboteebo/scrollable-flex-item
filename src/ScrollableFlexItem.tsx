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
      style={{
        flex: 1,
        minHeight: 0,
        position: "relative",
      }}
    >
      <div
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          overflow: "auto",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
