import React from 'react';

interface AnimatedIconWrapperProps {
  children: React.ReactNode;
  className?: string
}

export function AnimatedIconWrapper({ children, className }: AnimatedIconWrapperProps) {

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className || ''}`}
    >
      {children}
    </div>
  );
}