import { Variants } from 'framer-motion';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
  ease?: string | number[];
  stagger?: number; // For staggered animations
}

export const iconAnimations = {
  // Pulse effect
  pulse: (config: AnimationConfig = {}): Variants => ({
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: config.duration ?? 1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "easeInOut",
      },
    },
  }),

  // Bounce effect
  bounce: (config: AnimationConfig = {}): Variants => ({
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: config.duration ?? 0.6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "easeOut",
      },
    },
  }),

  // Spin effect
  spin: (config: AnimationConfig = {}): Variants => ({
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: config.duration ?? 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  }),

  // Float effect
  float: (config: AnimationConfig = {}): Variants => ({
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: config.duration ?? 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "easeInOut",
      },
    },
  }),

  // Wiggle effect
  wiggle: (config: AnimationConfig = {}): Variants => ({
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: config.duration ?? 0.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
  }),

  // Fade in
  fadeIn: (config: AnimationConfig = {}): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: config.duration ?? 0.5,
      },
    },
  }),

  // Scale in
  scaleIn: (config: AnimationConfig = {}): Variants => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: config.duration ?? 0.3,
        ease: "easeOut",
      },
    },
  }),

  // Filled path reveal - works with any filled SVG
  drawOn: (config: AnimationConfig = {}): Variants => ({
    hidden: { 
      scale: 0,
      opacity: 0,
      transformOrigin: "center center"
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: config.duration ?? 1,
        ease: "easeOut",
      },
    },
  }),

  // Staggered path appearance for filled paths
  drawStaggered: (config: AnimationConfig = {}): Variants => ({
    hidden: { 
      scale: 0,
      transformOrigin: "center center"
    },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        duration: config.duration ?? 0.6,
        delay: i * (config.stagger ?? 0.2),
        ease: "easeOut",
      },
    }),
  }),

  // Clip path reveal animation (works great with filled paths)
  reveal: (config: AnimationConfig = {}): Variants => ({
    hidden: { 
      clipPath: "inset(0 100% 0 0)" 
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: config.duration ?? 1.5,
        ease: "easeInOut",
      },
    },
  }),

  // Mask-based trace effect for filled paths
  trace: (config: AnimationConfig = {}): Variants => ({
    hidden: { 
      clipPath: "circle(0% at 50% 50%)"
    },
    visible: {
      clipPath: "circle(150% at 50% 50%)",
      transition: {
        duration: config.duration ?? 1.5,
        ease: "easeInOut",
      },
    },
  }),

  // Slide in effect for filled paths
  writing: (config: AnimationConfig = {}): Variants => ({
    hidden: { 
      x: -20,
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left center"
    },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: config.duration ?? 0.8,
        delay: i * (config.stagger ?? 0.2),
        ease: "easeOut",
      },
    }),
  }),

  // Morphing effect - good for simple shapes
  morph: (config: AnimationConfig = {}): Variants => ({
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.2, 0.8, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: config.duration ?? 2,
        repeat: config.repeat ?? Infinity,
        repeatType: 'loop',
        ease: "easeInOut",
      },
    },
  }),

  // Book flip animation
  pageFlip: (config: AnimationConfig = {}): Variants => ({
    page1: {
      rotateY: [0, -180],
      transition: {
        duration: config.duration ?? 1,
        delay: 0,
        ease: "easeInOut",
      }
    },
    page2: {
      rotateY: [0, -180],
      transition: {
        duration: config.duration ?? 1,
        delay: 0.3,
        ease: "easeInOut",
      }
    },
    page3: {
      rotateY: [0, -180],
      transition: {
        duration: config.duration ?? 1,
        delay: 0.6,
        ease: "easeInOut",
      }
    },
  }),

  // Explode and reassemble
  explode: (config: AnimationConfig = {}): Variants => ({
    initial: { 
      scale: 1, 
      x: 0, 
      y: 0, 
      rotate: 0,
      opacity: 1
    },
    animate: {
      scale: [1, 0.8, 1.2, 1],
      x: [0, Math.random() * 20 - 10, 0],
      y: [0, Math.random() * 20 - 10, 0],
      rotate: [0, Math.random() * 20 - 10, 0],
      opacity: [1, 0.7, 1],
      transition: {
        duration: config.duration ?? 1.5,
        repeat: config.repeat ?? Infinity,
        repeatType: 'loop',
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1],
      },
    },
  }),

  // Grow from center - perfect for filled shapes
  typewriter: (config: AnimationConfig = {}): Variants => ({
    hidden: { 
      scale: 0,
      transformOrigin: "center center"
    },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        duration: config.duration ?? 0.4,
        delay: i * (config.stagger ?? 0.1),
        ease: "backOut",
      },
    }),
  }),

  // Liquid/wave effect
  wave: (config: AnimationConfig = {}): Variants => ({
    initial: { y: 0 },
    animate: {
      y: [0, -5, 0, 5, 0],
      transition: {
        duration: config.duration ?? 2,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  }),
};

export type AnimationType = keyof typeof iconAnimations;