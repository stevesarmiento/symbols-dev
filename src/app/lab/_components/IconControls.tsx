'use client';

import React from 'react';
// Slider component will be imported by the specific control components if needed.

interface IconControlsProps {
  title: string;
  children: React.ReactNode; // This will hold the icon-specific controls
}

export function IconControls({
  title,
  children,
}: IconControlsProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-zinc-300 text-center md:text-left">{title}</h1>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {children}
      </div>
    </div>
  );
}