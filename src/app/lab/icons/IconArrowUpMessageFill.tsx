'use client';

import React from 'react';
import { motion, Transition } from 'framer-motion';

interface IconArrowUpMessageFillProps {
  className?: string;
  width?: number;
  height?: number;
  bubbleFill?: string;
  arrowFill?: string;

  // Bubble animation props
  bubbleFillOpacity?: number;
  bubbleScaleKeyframes?: number[];
  bubbleStiffness?: number;
  bubbleDamping?: number;
  bubbleMass?: number;
  bubbleDelay?: number;

  // Arrow animation props
  arrowState?: "initial" | "animate";
  arrowInitialScale?: number;
  arrowAnimateScale?: number;
  arrowInitialOpacity?: number;
  arrowAnimateOpacity?: number;
  arrowInitialX?: number;
  arrowAnimateX?: number;
  arrowInitialY?: number;
  arrowAnimateY?: number;
  arrowInitialRotate?: number;
  arrowAnimateRotate?: number;
  arrowStiffness?: number;
  arrowDamping?: number;
  arrowMass?: number;
  arrowDelay?: number;
}

const bubblePathD = "M22.1484 8.87695C22.1484 13.7402 17.4805 17.7441 10.4395 17.7441C10.3125 17.7441 10.1855 17.7344 10.0586 17.7246C9.92188 17.7246 9.78516 17.7734 9.61914 17.8906C7.95898 19.082 5.03906 20.3613 3.86719 20.3613C3.11523 20.3613 2.90039 19.7461 3.28125 19.2578C3.65234 18.7695 4.62891 17.6953 5.17578 16.7969C5.25391 16.6504 5.20508 16.5039 5.05859 16.4258C1.92383 14.7461 0 12.002 0 8.87695C0 3.96484 4.92188 0 11.0742 0C17.2266 0 22.1484 3.96484 22.1484 8.87695Z";
const arrowPathD = "M10.498 4.13086L7.13867 7.4707C7.00195 7.61719 6.94336 7.79297 6.94336 7.99805C6.94336 8.41797 7.25586 8.73047 7.67578 8.73047C7.88086 8.73047 8.07617 8.65234 8.21289 8.50586L9.4043 7.30469L10.4102 6.10352L10.3223 8.23242L10.3223 13.252C10.3223 13.6914 10.6445 14.0039 11.084 14.0039C11.5332 14.0039 11.8457 13.6914 11.8457 13.252L11.8457 8.23242L11.7578 6.08398L12.7832 7.30469L13.9648 8.50586C14.1016 8.66211 14.2871 8.73047 14.502 8.73047C14.9219 8.73047 15.2441 8.41797 15.2441 7.99805C15.2441 7.79297 15.166 7.61719 15.0293 7.4707L11.6797 4.13086C11.4844 3.93555 11.3184 3.83789 11.084 3.83789C10.8691 3.83789 10.7031 3.92578 10.498 4.13086Z";

export function IconArrowUpMessageFill({
  className,
  width = 200,
  height = 200,
  bubbleFill = "currentColor",
  arrowFill = "white",

  bubbleFillOpacity = 0.2,
  bubbleScaleKeyframes = [0, 1.05, 1],
  bubbleStiffness = 280,
  bubbleDamping = 18,
  bubbleMass = 0.3,
  bubbleDelay = 0,

  arrowState = "animate",
  arrowInitialScale = 0,
  arrowAnimateScale = 1,
  arrowInitialOpacity = 0,
  arrowAnimateOpacity = 1,
  arrowInitialX = 0,
  arrowAnimateX = 0,
  arrowInitialY = 5,
  arrowAnimateY = 0,
  arrowInitialRotate = 0,
  arrowAnimateRotate = 0,
  arrowStiffness = 280,
  arrowDamping = 18,
  arrowMass = 0.3,
  arrowDelay = 0.3,
}: IconArrowUpMessageFillProps) {

  const bubbleSpringTransition: Transition = {
    type: "spring",
    stiffness: bubbleStiffness,
    damping: bubbleDamping,
    mass: bubbleMass,
    delay: bubbleDelay,
  };

  const arrowSpringTransitionBase: Transition = {
    type: "spring",
    stiffness: arrowStiffness,
    damping: arrowDamping,
    mass: arrowMass,
  };

  const targetArrowScale = arrowState === "animate" ? arrowAnimateScale : arrowInitialScale;
  const targetArrowOpacity = arrowState === "animate" ? arrowAnimateOpacity : arrowInitialOpacity;
  const targetArrowX = arrowState === "animate" ? arrowAnimateX : arrowInitialX;
  const targetArrowY = arrowState === "animate" ? arrowAnimateY : arrowInitialY;
  const targetArrowRotate = arrowState === "animate" ? arrowAnimateRotate : arrowInitialRotate;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
            height="20.3613"
            opacity="0"
            width="22.5098"
            x="0"
            y="0"
            />
        <motion.path
            d={bubblePathD}
            fill={bubbleFill}
            fillOpacity={bubbleFillOpacity}
            animate={{ scale: bubbleScaleKeyframes }}
            transition={bubbleSpringTransition}
            />
        <motion.path
            d={arrowPathD}
            fill={arrowFill}
            fillOpacity={1}
            initial={{
              scale: arrowInitialScale,
              opacity: arrowInitialOpacity,
              x: arrowInitialX,
              y: arrowInitialY,
              rotate: arrowInitialRotate,
            }}
            animate={{
              scale: targetArrowScale,
              opacity: targetArrowOpacity,
              x: targetArrowX,
              y: targetArrowY,
              rotate: targetArrowRotate,
            }}
            transition={{
              scale: { ...arrowSpringTransitionBase, delay: arrowDelay },
              opacity: { ...arrowSpringTransitionBase, delay: arrowDelay },
              x: { ...arrowSpringTransitionBase, delay: arrowDelay },
              y: { ...arrowSpringTransitionBase, delay: arrowDelay },
              rotate: { ...arrowSpringTransitionBase, delay: arrowDelay },
            }}
            />
        </g>
    </svg>
  );
}