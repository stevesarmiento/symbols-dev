'use client';

import React from 'react';
import { motion, Transition } from 'framer-motion';

interface IconFigureWalkMotionProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string; // General fill for both parts

  // --- Motion Lines Animation Props ---
  motionLinesState?: "initial" | "animate";
  motionLinesFillOpacity?: number;
  // Initial state
  motionLinesInitialX?: number;
  motionLinesInitialOpacity?: number;
  // Animate state
  motionLinesAnimateX?: number;
  motionLinesAnimateOpacity?: number;
  // Physics
  motionLinesStiffness?: number;
  motionLinesDamping?: number;
  motionLinesMass?: number;
  motionLinesDelay?: number;

  // --- Figure Animation Props ---
  figureState?: "initial" | "animate";
  figureFillOpacity?: number;
  // Initial state
  figureInitialScale?: number;
  figureInitialOpacity?: number;
  figureInitialX?: number;
  figureInitialY?: number;
  figureInitialRotate?: number;
  // Animate state
  figureAnimateScale?: number;
  figureAnimateOpacity?: number;
  figureAnimateX?: number;
  figureAnimateY?: number;
  figureAnimateRotate?: number;
  // Physics
  figureStiffness?: number;
  figureDamping?: number;
  figureMass?: number;
  figureDelay?: number;
}

const originalMotionLinesPathD = "M4.10156 3.61328L9.73633 3.61328C10.0781 3.61328 10.3516 3.33008 10.3516 2.97852C10.3516 2.62695 10.0781 2.33398 9.73633 2.33398L4.10156 2.33398C3.75 2.33398 3.48633 2.62695 3.48633 2.97852C3.48633 3.33008 3.75 3.61328 4.10156 3.61328ZM0.605469 8.50586L7.29492 8.50586C7.64648 8.50586 7.91016 8.22266 7.91016 7.87109C7.91016 7.51953 7.64648 7.22656 7.29492 7.22656L0.605469 7.22656C0.263672 7.22656 0 7.5293 0 7.87109C0 8.21289 0.263672 8.50586 0.605469 8.50586ZM3.52539 13.3984L7.24609 13.3984C7.58789 13.3984 7.85156 13.1152 7.85156 12.7637C7.85156 12.4121 7.58789 12.1191 7.24609 12.1191L3.52539 12.1191C3.17383 12.1191 2.91016 12.4121 2.91016 12.7637C2.91016 13.1152 3.17383 13.3984 3.52539 13.3984ZM0.957031 18.2324L6.05469 18.2324C6.39648 18.2324 6.66016 17.9492 6.66016 17.5977C6.66016 17.2461 6.39648 16.9531 6.05469 16.9531L0.957031 16.9531C0.615234 16.9531 0.351562 17.2461 0.351562 17.5977C0.351562 17.9492 0.615234 18.2324 0.957031 18.2324Z";

const individualMotionLinePaths = originalMotionLinesPathD
  .split('Z')
  .filter(path => path.trim() !== '')
  .map(path => path.trim() + 'Z');

const figurePathD = "M11.6797 21.0742L14.6094 17.5781C14.9023 17.2363 14.9414 17.1582 15.0586 16.7969L15.2734 16.1328L13.7012 14.1602L13.2227 16.3672L10.332 19.8047C9.41406 20.9082 10.918 21.9824 11.6797 21.0742ZM18.8184 20.7812C19.4238 22.002 21.2305 21.25 20.5762 19.9219L18.584 15.8887C18.4277 15.5859 18.2129 15.2539 18.0273 14.9902L16.7676 13.2031L16.8555 12.9395C17.1875 11.9238 17.3242 11.3184 17.3926 10.3125L17.5879 7.49023C17.6855 6.15234 16.8945 5.13672 15.5273 5.13672C14.4922 5.13672 13.7988 5.6543 12.8418 6.58203L11.3574 8.05664C10.8691 8.53516 10.7129 8.92578 10.6641 9.56055L10.4785 11.8652C10.4297 12.4512 10.752 12.8613 11.2988 12.8809C11.8457 12.9199 12.1777 12.5977 12.2266 11.9727L12.4414 9.44336L13.1543 8.79883C13.418 8.56445 13.7598 8.7207 13.7402 8.98438L13.584 11.123C13.4961 12.207 13.75 12.7246 14.4922 13.6523L16.4746 16.1328C16.6699 16.3867 16.6992 16.4844 16.7773 16.6406ZM22.2168 8.94531L19.9707 8.94531L18.5449 7.37305L18.3789 9.72656L18.9453 10.293C19.2578 10.6055 19.541 10.7031 20.1172 10.7031L22.2168 10.7031C22.8125 10.7031 23.1934 10.3711 23.1934 9.82422C23.1934 9.29688 22.8027 8.94531 22.2168 8.94531ZM16.6113 4.25781C17.793 4.25781 18.7402 3.30078 18.7402 2.12891C18.7402 0.947266 17.793 0 16.6113 0C15.4297 0 14.4824 0.947266 14.4824 2.12891C14.4824 3.30078 15.4297 4.25781 16.6113 4.25781Z";


export function IconFigureWalkMotion({
  className,
  width = 24,
  height = 24,
  fill = "currentColor",

  motionLinesState = "animate",
  motionLinesInitialX = -5,
  motionLinesInitialOpacity = 0,
  motionLinesAnimateX = 0,
  motionLinesAnimateOpacity = 0.6,
  motionLinesStiffness = 170,
  motionLinesDamping = 26,
  motionLinesMass = 1,
  motionLinesDelay = 0.1,

  figureState = "animate",
  figureInitialScale = 0.5,
  figureInitialOpacity = 0.5,
  figureInitialX = -10,
  figureInitialY = 5,
  figureInitialRotate = -22,
  figureAnimateScale = 1,
  figureAnimateOpacity = 0.85,
  figureAnimateX = 0,
  figureAnimateY = 0,
  figureAnimateRotate = 0,
  figureStiffness = 250,
  figureDamping = 22,
  figureMass = 0.6,
  figureDelay = 0,
}: IconFigureWalkMotionProps) {

  const motionLinesTransition: Transition = {
    type: "spring",
    stiffness: motionLinesStiffness,
    damping: motionLinesDamping,
    mass: motionLinesMass,
  };

  const figureTransition: Transition = {
    type: "spring",
    stiffness: figureStiffness,
    damping: figureDamping,
    mass: figureMass,
  };

  const targetMotionLinesX = motionLinesState === "animate" ? motionLinesAnimateX : motionLinesInitialX;
  const targetMotionLinesOpacity = motionLinesState === "animate" ? motionLinesAnimateOpacity : motionLinesInitialOpacity;

  const targetFigureScale = figureState === "animate" ? figureAnimateScale : figureInitialScale;
  const targetFigureOpacity = figureState === "animate" ? figureAnimateOpacity : figureInitialOpacity;
  const targetFigureX = figureState === "animate" ? figureAnimateX : figureInitialX;
  const targetFigureY = figureState === "animate" ? figureAnimateY : figureInitialY;
  const targetFigureRotate = figureState === "animate" ? figureAnimateRotate : figureInitialRotate;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none" // Set fill to none on SVG, apply to paths
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect height="21.9824" opacity="0" width="23.5547" x="0" y="0"></rect>
        {individualMotionLinePaths.map((pathD, index) => (
          <motion.path
            key={`motion-line-${index}`}
            d={pathD}
            fill={fill}
            initial={{
              x: motionLinesInitialX,
              opacity: motionLinesInitialOpacity,
            }}
            animate={{
              x: targetMotionLinesX,
              opacity: targetMotionLinesOpacity,
            }}
            transition={{
              ...motionLinesTransition,
              delay: motionLinesDelay + index * 0.04, // Staggered delay
            }}
            fillOpacity={targetMotionLinesOpacity}
          />
        ))}
        <motion.path
          d={figurePathD}
          fill={fill}
          initial={{
            scale: figureInitialScale,
            opacity: figureInitialOpacity,
            x: figureInitialX,
            y: figureInitialY,
            rotate: figureInitialRotate,
          }}
          animate={{
            scale: targetFigureScale,
            opacity: targetFigureOpacity,
            x: targetFigureX,
            y: targetFigureY,
            rotate: targetFigureRotate,
          }}
          transition={{
            ...figureTransition,
            delay: figureDelay,
          }}
          fillOpacity={targetFigureOpacity} // Opacity controlled by animate prop
        />
      </g>
    </svg>
  );
}