"use client";

import React, { useState, useEffect, useMemo } from 'react';
import * as Icons from 'symbols-react';
import { motion } from 'framer-motion';

const BackgroundIconGrid = () => {
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });
  
  // Get all available icons
  const allIcons = useMemo(() => {
    return Object.entries(Icons).filter(([name]) => name.startsWith('Icon'));
  }, []);

  // Calculate grid dimensions based on viewport
  useEffect(() => {
    const calculateGrid = () => {
      const iconSize = 40; // Size of each grid cell
      const spacing = 20; // Space between icons
      const cellSize = iconSize + spacing;
      
      const cols = Math.ceil(window.innerWidth / cellSize) + 2; // Extra for overflow
      const rows = Math.ceil(window.innerHeight / cellSize) + 2; // Extra for overflow
      
      setGridDimensions({ rows, cols });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  // Generate random icons for the grid
  const gridIcons = useMemo(() => {
    const totalCells = gridDimensions.rows * gridDimensions.cols;
    const icons = [];
    
    for (let i = 0; i < totalCells; i++) {
      const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
      icons.push({
        id: i,
        name: randomIcon[0],
        Component: randomIcon[1],
        delay: Math.random() * 2, // Random animation delay
      });
    }
    
    return icons;
  }, [gridDimensions, allIcons]);

  if (gridDimensions.rows === 0 || gridDimensions.cols === 0) {
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
        className="grid gap-5"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, 40px)`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, 40px)`,
          transform: 'translate(-20px, -20px)', // Offset to ensure full coverage
        }}
      >
        {gridIcons.map(({ id, Component, delay }) => (
          <motion.div
            key={id}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              duration: 1,
              delay: delay,
              ease: "easeOut"
            }}
          >
            <Component 
              className="w-5 h-5 fill-white/50" 
              width={20} 
              height={20} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundIconGrid;