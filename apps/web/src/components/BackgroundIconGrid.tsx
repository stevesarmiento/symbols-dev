"use client";

import React, { useState, useEffect, useMemo } from 'react';
import * as Icons from 'symbols-react';
import { motion } from "motion/react";

const BackgroundIconGrid = () => {
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });
  
  // Get all available icons
  const allIcons = useMemo(() => {
    return Object.entries(Icons).filter(([name]) => name.startsWith('Icon'));
  }, []);

  // Calculate grid dimensions based on viewport
  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = 32; // Smaller cell size since no gap
      
      const cols = Math.ceil(window.innerWidth / cellSize) + 4; // More extra for better coverage
      const rows = Math.ceil(window.innerHeight / cellSize) + 4; // More extra for better coverage
      
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
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, 32px)`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, 32px)`,
          transform: 'translate(-16px, -16px)', // Adjusted offset for smaller cells
        }}
      >
        {gridIcons.map(({ id, Component, delay }) => (
          <motion.div
            key={id}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 280,
                damping: 18,
                mass: 0.3,
                delay: delay,
            }}
          >
            <Component 
              className="w-4 h-4 fill-white/20" 
              width={16} 
              height={16} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundIconGrid;