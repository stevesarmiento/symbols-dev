
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