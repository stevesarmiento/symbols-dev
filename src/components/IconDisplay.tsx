"use client";

import React from 'react';
import { IconProps } from '@/components/IconsList';
import { AnimatedIcon } from './AnimatedIcon';
import { AnimationType, AnimationConfig } from '@/lib/icon-animations';

interface IconDisplayProps {
  IconComponent: React.ComponentType<IconProps>;
  size: number;
  fillColor: string;
  svgContent: string;
  showAnimated: boolean;
  selectedAnimation: AnimationType;
  animationConfig: AnimationConfig;
}

export function IconDisplay({ 
  IconComponent, 
  size, 
  fillColor, 
  svgContent,
  showAnimated,
  selectedAnimation,
  animationConfig
}: IconDisplayProps) {
  
  return (
    <div className="grid md:grid-cols-1 gap-8">
      <div 
        className="flex items-center justify-center p-8 bg-neutral-800/30 rounded-xl shadow-lg aspect-square overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      >
        {showAnimated ? (
          <AnimatedIcon
            key={`${selectedAnimation}-${JSON.stringify(animationConfig)}`}
            svgContent={svgContent}
            animation={selectedAnimation}
            animationConfig={animationConfig}
            width={size}
            height={size}
            fill={fillColor}
            className=""
          />
        ) : (
          <IconComponent 
            width={size} 
            height={size} 
            fill={fillColor} 
            className="transition-all group-hover:scale-110 duration-300" 
          />
        )}
      </div>
    </div>
  );
}