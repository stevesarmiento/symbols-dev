"use client";

import React, { useState, useEffect, useMemo } from 'react';
import * as Icons from 'symbols-react';
import { motion, Transition, type Spring } from 'framer-motion';

const baseTransitionConfig: Spring = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

// Define a more specific props type for the icon components
interface IconComponentProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

interface GridIconData {
  id: number;
  name: string;
  Component: React.ComponentType<IconComponentProps>; // Use specific type
  delay: number;
  transition: Transition;
}

const MemoizedIcon = React.memo(({ Component, transition }: { Component: React.ComponentType<IconComponentProps>, transition: Transition }) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={transition}
    >
      <Component 
        className="w-4 h-4 fill-white/20" 
        width={16} 
        height={16} 
      />
    </motion.div>
  );
});
MemoizedIcon.displayName = "MemoizedIcon";

const BackgroundIconGrid = () => {
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });
  
  const allIcons = useMemo(() => {
    return Object.entries(Icons).filter(([name]) => name.startsWith('Icon'));
  }, []);

  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = 32; 
      const cols = Math.ceil(window.innerWidth / cellSize) + 4; 
      const rows = Math.ceil(window.innerHeight / cellSize) + 4;
      setGridDimensions({ rows, cols });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const gridIcons: GridIconData[] = useMemo(() => {
    if (allIcons.length === 0 || gridDimensions.rows === 0 || gridDimensions.cols === 0) {
      return [];
    }
    const totalCells = gridDimensions.rows * gridDimensions.cols;
    const icons: GridIconData[] = [];
    
    for (let i = 0; i < totalCells; i++) {
      const randomIconEntry = allIcons[Math.floor(Math.random() * allIcons.length)];
      const delay = Math.random() * 2;
      icons.push({
        id: i,
        name: randomIconEntry[0],
        Component: randomIconEntry[1] as React.ComponentType<IconComponentProps>, // Assert type if necessary
        delay: delay,
        transition: { ...baseTransitionConfig, delay: delay } 
      });
    }
    return icons;
  }, [gridDimensions, allIcons]);

  if (gridDimensions.rows === 0 || gridDimensions.cols === 0 || allIcons.length === 0) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'transparent',
      }}
    >
      <div 
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, 32px)`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, 32px)`,
        }}
      >
        {gridIcons.map(({ id, Component, transition }) => (
          <MemoizedIcon 
            key={id} 
            Component={Component} 
            transition={transition}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundIconGrid;