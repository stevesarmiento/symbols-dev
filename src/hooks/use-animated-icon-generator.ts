import { useMemo } from 'react';
import { AnimationType, AnimationConfig } from '@/lib/icon-animations';

interface UseAnimatedIconGeneratorProps {
  iconName: string;
  svgContent: string;
  animation: AnimationType;
  animationConfig?: AnimationConfig;
}

export function useAnimatedIconGenerator({
  iconName,
  svgContent,
  animation,
  animationConfig = {},
}: UseAnimatedIconGeneratorProps) {
  
  const generateAnimatedComponent = useMemo(() => {
    const componentCode = `import React from 'react';
import { motion } from 'framer-motion';

interface ${iconName}AnimatedProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  trigger?: 'mount' | 'hover' | 'click' | 'inView';
}

export function ${iconName}Animated({ 
  className, 
  width = 24, 
  height = 24, 
  fill = "currentColor",
  stroke,
  strokeWidth,
  trigger = 'mount'
}: ${iconName}AnimatedProps) {
  const variants = {
    ${getVariantsString(animation, animationConfig)}
  };

  const getAnimationProps = () => {
    switch (trigger) {
      case 'mount':
        return { initial: 'hidden', animate: 'visible' };
      case 'hover':
        return { whileHover: 'animate' };
      case 'click':
        return { whileTap: 'animate' };
      case 'inView':
        return { initial: 'hidden', whileInView: 'visible', viewport: { once: true } };
      default:
        return { initial: 'hidden', animate: 'visible' };
    }
  };

  return (
    <motion.svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={${animation === 'drawOn' ? '"none"' : 'fill'}}
      ${animation === 'drawOn' ? 'stroke={stroke || fill}\n      strokeWidth={strokeWidth || 2}' : ''}
      variants={variants}
      {...getAnimationProps()}
    >
      ${svgContent}
    </motion.svg>
  );
}`;

    return componentCode;
  }, [iconName, svgContent, animation, animationConfig]);

  return { generateAnimatedComponent };
}

function getVariantsString(animation: AnimationType, config: AnimationConfig) {
  switch (animation) {
    case 'drawOn':
      return `hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: ${config.duration || 1.5}, ease: "${config.ease || 'easeInOut'}" }
    }`;
    case 'pulse':
      return `animate: {
      scale: [1, 1.1, 1],
      transition: { 
        duration: ${config.duration || 1}, 
        repeat: Infinity,
        ease: "${config.ease || 'easeInOut'}"
      }
    }`;
    case 'spin':
      return `animate: {
      rotate: 360,
      transition: { 
        duration: ${config.duration || 1}, 
        repeat: Infinity,
        ease: "linear"
      }
    }`;
    case 'bounce':
      return `animate: {
      y: [0, -10, 0],
      transition: { 
        duration: ${config.duration || 0.6}, 
        repeat: Infinity,
        ease: "easeOut"
      }
    }`;
    default:
      return `hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: ${config.duration || 0.5} }
    }`;
  }
}