"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { iconAnimations, AnimationType, AnimationConfig } from '@/lib/icon-animations';

interface AnimatedIconProps {
  svgContent: string;
  animation?: AnimationType;
  animationConfig?: AnimationConfig;
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  viewBox?: string;
  trigger?: 'mount' | 'hover' | 'click' | 'inView';
}

export function AnimatedIcon({
  svgContent,
  animation = 'fadeIn',
  animationConfig = {},
  className,
  width = 24,
  height = 24,
  fill = 'currentColor',
  stroke,
  strokeWidth,
  viewBox: providedViewBox,
  trigger = 'mount',
}: AnimatedIconProps) {
  const variants = iconAnimations[animation](animationConfig);
  
  // Use a consistent viewBox - most icons should use 0 0 24 24 or similar
  const normalizedViewBox = providedViewBox || '0 0 24 24';
  
  // Calculate the center point for transform origin
  const viewBoxCenter = useMemo(() => {
    const [x, y, w, h] = normalizedViewBox.split(' ').map(Number);
    return {
      x: x + w / 2,
      y: y + h / 2,
    };
  }, [normalizedViewBox]);

  // Parse SVG content to extract individual paths and elements
  const svgElements = useMemo(() => {
    if (typeof document === 'undefined') return [];
    
    const parser = new DOMParser();
    // Wrap the content in an SVG element to ensure proper parsing
    const wrappedContent = `<svg viewBox="${normalizedViewBox}">${svgContent}</svg>`;
    const doc = parser.parseFromString(wrappedContent, 'image/svg+xml');
    const paths = Array.from(doc.querySelectorAll('path, rect, circle, ellipse, line, polyline, polygon'));
    
    return paths.map((element, index) => ({
      index,
      tagName: element.tagName.toLowerCase(),
      attributes: Array.from(element.attributes).reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as Record<string, string>),
    }));
  }, [svgContent, normalizedViewBox]);

  const isAdvancedAnimation = ['drawStaggered', 'writing', 'typewriter', 'explode', 'drawOn', 'trace', 'reveal'].includes(animation);
  const isContinuousAnimation = ['pulse', 'spin', 'bounce', 'float', 'wiggle', 'wave', 'morph'].includes(animation);
  
  const getAnimationProps = () => {
    if (trigger === 'hover') {
      return isContinuousAnimation 
        ? { whileHover: 'animate' }
        : { whileHover: 'visible', initial: 'hidden' };
    }
    if (trigger === 'click') {
      return isContinuousAnimation 
        ? { whileTap: 'animate' }
        : { whileTap: 'visible', initial: 'hidden' };
    }
    if (trigger === 'inView') {
      return { 
        initial: 'hidden', 
        whileInView: isContinuousAnimation ? 'animate' : 'visible',
        viewport: { once: true }
      };
    }
    
    // Default 'mount' trigger
    if (isContinuousAnimation) {
      return { animate: 'animate' };
    } else {
      return { initial: 'hidden', animate: 'visible' };
    }
  };

  // SVG styles with proper transform origin
  const svgStyles = {
    transformOrigin: `${viewBoxCenter.x}px ${viewBoxCenter.y}px`,
  };

  // For advanced animations that need individual path control
  if (isAdvancedAnimation && svgElements.length > 0) {
    return (
      <motion.svg
        key={`${animation}-${JSON.stringify(animationConfig)}`}
        className={className}
        width={width}
        height={height}
        viewBox={normalizedViewBox}
        fill="none" // Don't apply default fill to avoid unwanted backgrounds
        stroke={stroke}
        strokeWidth={strokeWidth}
        initial="hidden"
        animate="visible"
        style={svgStyles}
        preserveAspectRatio="xMidYMid meet"
      >
        {svgElements.map(({ index, tagName, attributes }) => {
          const MotionElement = motion[tagName as 'path' | 'rect' | 'circle' | 'ellipse' | 'line' | 'polyline' | 'polygon'];
          
          // Respect original fill attributes, only use fallback if no fill is specified
          const elementFill = attributes.fill || (attributes.fill !== 'none' ? fill : 'none');
          
          return (
            <MotionElement
              key={index}
              {...attributes}
              variants={variants}
              custom={index}
              fill={elementFill}
              stroke={attributes.stroke || stroke}
              strokeWidth={attributes.strokeWidth || strokeWidth}
              style={{
                transformOrigin: `${viewBoxCenter.x}px ${viewBoxCenter.y}px`,
              }}
            />
          );
        })}
      </motion.svg>
    );
  }

  // For simple animations on the whole SVG
  return (
    <motion.svg
      key={`${animation}-${JSON.stringify(animationConfig)}`}
      className={className}
      width={width}
      height={height}
      viewBox={normalizedViewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      variants={variants}
      {...getAnimationProps()}
      style={svgStyles}
      preserveAspectRatio="xMidYMid meet"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}