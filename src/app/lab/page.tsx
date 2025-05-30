'use client';

import React, { useState } from 'react';
import { IconArrowUpMessageFill } from "./icons/IconArrowUpMessageFill";
import { IconFigureWalkMotion } from "./icons/IconFigureWalkMotion";
import { motion } from 'framer-motion';
import { IconArrowClockwise } from 'symbols-react';
import { AnimatedIconWrapper } from './_components/AnimatedIconWrapper';
import { IconControls } from './_components/IconControls';
import { ArrowMessageControls } from './icons/controls/ArrowMessageControls';
import { FigureWalkControls } from './icons/controls/FigureWalkControls';
import { useRouter } from 'next/navigation';

// Define types for the icons we can display
type IconType = 'arrowMessage' | 'figureWalk';

export default function LabPage() {
  const [resetKey, setResetKey] = useState(Date.now());
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentIcon, setCurrentIcon] = useState<IconType>('arrowMessage');
  
  // State for IconArrowUpMessageFill (Bubble & Arrow)
  const [amWidth, setAmWidth] = useState(220);
  const [amHeight, setAmHeight] = useState(220);
  const [amBubbleFillColor, setAmBubbleFillColor] = useState('white');
  const [amArrowFillColor, setAmArrowFillColor] = useState('white');
  const [amBubbleFillOpacity, setAmBubbleFillOpacity] = useState(0.2);
  const [amBubbleScaleKeyframesStr, setAmBubbleScaleKeyframesStr] = useState("0, 1, 1");
  const [amBubbleStiffness, setAmBubbleStiffness] = useState(280);
  const [amBubbleDamping, setAmBubbleDamping] = useState(18);
  const [amBubbleMass, setAmBubbleMass] = useState(0.3);
  const [amBubbleDelay, setAmBubbleDelay] = useState(0);
  const [amArrowInitialScale, setAmArrowInitialScale] = useState(0);
  const [amArrowAnimateScale, setAmArrowAnimateScale] = useState(1);
  const [amArrowInitialOpacity, setAmArrowInitialOpacity] = useState(0);
  const [amArrowAnimateOpacity, setAmArrowAnimateOpacity] = useState(1);
  const [amArrowInitialX, setAmArrowInitialX] = useState(0);
  const [amArrowAnimateX, setAmArrowAnimateX] = useState(0);
  const [amArrowInitialY, setAmArrowInitialY] = useState(10);
  const [amArrowAnimateY, setAmArrowAnimateY] = useState(0);
  const [amArrowInitialRotate, setAmArrowInitialRotate] = useState(270);
  const [amArrowAnimateRotate, setAmArrowAnimateRotate] = useState(0);
  const [amArrowStiffness, setAmArrowStiffness] = useState(300);
  const [amArrowDamping, setAmArrowDamping] = useState(18);
  const [amArrowMass, setAmArrowMass] = useState(0.6);
  const [amArrowDelay, setAmArrowDelay] = useState(0.1);

  const amBubbleScaleKeyframes = amBubbleScaleKeyframesStr.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));

  // State for IconFigureWalkMotion
  const [fwWidth, setFwWidth] = useState(180);
  const [fwHeight, setFwHeight] = useState(180);
  const [fwFillColor, setFwFillColor] = useState('white');

  // Motion Lines
  const [fwMotionLinesFillOpacity, setFwMotionLinesFillOpacity] = useState(0.5);
  const [fwMotionLinesInitialX, setFwMotionLinesInitialX] = useState(10);
  const [fwMotionLinesInitialOpacity, setFwMotionLinesInitialOpacity] = useState(0);
  const [fwMotionLinesAnimateX, setFwMotionLinesAnimateX] = useState(0);
  const [fwMotionLinesAnimateOpacity, setFwMotionLinesAnimateOpacity] = useState(0.5);
  const [fwMotionLinesStiffness, setFwMotionLinesStiffness] = useState(280);
  const [fwMotionLinesDamping, setFwMotionLinesDamping] = useState(20);
  const [fwMotionLinesMass, setFwMotionLinesMass] = useState(0.5);
  const [fwMotionLinesDelay, setFwMotionLinesDelay] = useState(0.1);

  // Figure
  const [fwFigureFillOpacity, setFwFigureFillOpacity] = useState(1);
  const [fwFigureInitialScale, setFwFigureInitialScale] = useState(0.5);
  const [fwFigureInitialOpacity, setFwFigureInitialOpacity] = useState(1);
  const [fwFigureInitialX, setFwFigureInitialX] = useState(-10);
  const [fwFigureInitialY, setFwFigureInitialY] = useState(2);
  const [fwFigureInitialRotate, setFwFigureInitialRotate] = useState(-8);
  const [fwFigureAnimateScale, setFwFigureAnimateScale] = useState(1);
  const [fwFigureAnimateOpacity, setFwFigureAnimateOpacity] = useState(1);
  const [fwFigureAnimateX, setFwFigureAnimateX] = useState(0);
  const [fwFigureAnimateY, setFwFigureAnimateY] = useState(0);
  const [fwFigureAnimateRotate, setFwFigureAnimateRotate] = useState(0);
  const [fwFigureStiffness, setFwFigureStiffness] = useState(180);
  const [fwFigureDamping, setFwFigureDamping] = useState(22);
  const [fwFigureMass, setFwFigureMass] = useState(1);
  const [fwFigureDelay, setFwFigureDelay] = useState(0);

  const router = useRouter();

  const commonButtonClass = "px-4 py-2 rounded-md text-sm font-medium transition-colors ";
  const activeIconClass = "bg-sky-500 text-white";
  const inactiveIconClass = "bg-zinc-700 hover:bg-zinc-600 text-zinc-300";

  return (
    <div className="flex min-h-screen flex-col items-center justify-start text-white pt-8 pb-12 px-4">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>
              </svg>
              Back
            </button>
            <div className="flex space-x-2">
                <button 
                    onClick={() => setCurrentIcon('arrowMessage')} 
                    className={`${commonButtonClass} ${currentIcon === 'arrowMessage' ? activeIconClass : inactiveIconClass}`}
                >
                    Arrow Message
                </button>
                <button 
                    onClick={() => setCurrentIcon('figureWalk')}
                    className={`${commonButtonClass} ${currentIcon === 'figureWalk' ? activeIconClass : inactiveIconClass}`}
                >
                    Figure Walk
                </button>
            </div>
        </div>
      
        <div className="space-y-10">
          {/* Icon Preview Area */}
          <div className="relative flex items-center justify-center mx-auto">
            <AnimatedIconWrapper>
              {currentIcon === 'arrowMessage' && (
                <IconArrowUpMessageFill
                  key={`am-${resetKey}`}
                  width={amWidth}
                  height={amHeight}
                  bubbleFill={amBubbleFillColor}
                  arrowFill={amArrowFillColor}
                  bubbleFillOpacity={amBubbleFillOpacity}
                  bubbleScaleKeyframes={amBubbleScaleKeyframes.length > 0 ? amBubbleScaleKeyframes : [0, 1.05, 1]}
                  bubbleStiffness={amBubbleStiffness}
                  bubbleDamping={amBubbleDamping}
                  bubbleMass={amBubbleMass}
                  bubbleDelay={amBubbleDelay}
                  arrowInitialScale={amArrowInitialScale}
                  arrowAnimateScale={amArrowAnimateScale}
                  arrowInitialOpacity={amArrowInitialOpacity}
                  arrowAnimateOpacity={amArrowAnimateOpacity}
                  arrowInitialX={amArrowInitialX}
                  arrowAnimateX={amArrowAnimateX}
                  arrowInitialY={amArrowInitialY}
                  arrowAnimateY={amArrowAnimateY}
                  arrowInitialRotate={amArrowInitialRotate}
                  arrowAnimateRotate={amArrowAnimateRotate}
                  arrowStiffness={amArrowStiffness}
                  arrowDamping={amArrowDamping}
                  arrowMass={amArrowMass}
                  arrowDelay={amArrowDelay}
                />
              )}
              {currentIcon === 'figureWalk' && (
                <IconFigureWalkMotion
                  key={`fw-${resetKey}`}
                  width={fwWidth}
                  height={fwHeight}
                  fill={fwFillColor}
                  motionLinesFillOpacity={fwMotionLinesFillOpacity}
                  motionLinesInitialX={fwMotionLinesInitialX}
                  motionLinesInitialOpacity={fwMotionLinesInitialOpacity}
                  motionLinesAnimateX={fwMotionLinesAnimateX}
                  motionLinesAnimateOpacity={fwMotionLinesAnimateOpacity}
                  motionLinesStiffness={fwMotionLinesStiffness}
                  motionLinesDamping={fwMotionLinesDamping}
                  motionLinesMass={fwMotionLinesMass}
                  motionLinesDelay={fwMotionLinesDelay}
                  figureFillOpacity={fwFigureFillOpacity}
                  figureInitialScale={fwFigureInitialScale}
                  figureInitialOpacity={fwFigureInitialOpacity}
                  figureInitialX={fwFigureInitialX}
                  figureInitialY={fwFigureInitialY}
                  figureInitialRotate={fwFigureInitialRotate}
                  figureAnimateScale={fwFigureAnimateScale}
                  figureAnimateOpacity={fwFigureAnimateOpacity}
                  figureAnimateX={fwFigureAnimateX}
                  figureAnimateY={fwFigureAnimateY}
                  figureAnimateRotate={fwFigureAnimateRotate}
                  figureStiffness={fwFigureStiffness}
                  figureDamping={fwFigureDamping}
                  figureMass={fwFigureMass}
                  figureDelay={fwFigureDelay}
                />
              )}
            </AnimatedIconWrapper>
            <button
              onClick={() => setResetKey(Date.now())}
              className="absolute top-3 right-3 md:top-[-8px] md:right-[-8px] flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white text-lg font-semibold h-10 w-10 rounded-lg shadow-md z-10 transition-colors duration-150 active:scale-[0.95]"
              title="Reset Animation"
            >
              <IconArrowClockwise className="w-6 h-6 fill-white" />
            </button>
          </div>

          <IconControls 
            title={currentIcon === 'arrowMessage' ? "Arrow Message Controls" : "Figure Walk Controls"}
          >
            {currentIcon === 'arrowMessage' && (
              <ArrowMessageControls
                width={amWidth} setWidth={setAmWidth}
                height={amHeight} setHeight={setAmHeight}
                bubbleFillColor={amBubbleFillColor} setBubbleFillColor={setAmBubbleFillColor}
                arrowFillColor={amArrowFillColor} setArrowFillColor={setAmArrowFillColor}
                bubbleFillOpacity={amBubbleFillOpacity} setBubbleFillOpacity={setAmBubbleFillOpacity}
                bubbleScaleKeyframesStr={amBubbleScaleKeyframesStr} setBubbleScaleKeyframesStr={setAmBubbleScaleKeyframesStr}
                bubbleStiffness={amBubbleStiffness} setBubbleStiffness={setAmBubbleStiffness}
                bubbleDamping={amBubbleDamping} setBubbleDamping={setAmBubbleDamping}
                bubbleMass={amBubbleMass} setBubbleMass={setAmBubbleMass}
                bubbleDelay={amBubbleDelay} setBubbleDelay={setAmBubbleDelay}
                arrowInitialScale={amArrowInitialScale} setArrowInitialScale={setAmArrowInitialScale}
                arrowAnimateScale={amArrowAnimateScale} setArrowAnimateScale={setAmArrowAnimateScale}
                arrowInitialOpacity={amArrowInitialOpacity} setArrowInitialOpacity={setAmArrowInitialOpacity}
                arrowAnimateOpacity={amArrowAnimateOpacity} setArrowAnimateOpacity={setAmArrowAnimateOpacity}
                arrowInitialX={amArrowInitialX} setArrowInitialX={setAmArrowInitialX}
                arrowAnimateX={amArrowAnimateX} setArrowAnimateX={setAmArrowAnimateX}
                arrowInitialY={amArrowInitialY} setArrowInitialY={setAmArrowInitialY}
                arrowAnimateY={amArrowAnimateY} setArrowAnimateY={setAmArrowAnimateY}
                arrowInitialRotate={amArrowInitialRotate} setArrowInitialRotate={setAmArrowInitialRotate}
                arrowAnimateRotate={amArrowAnimateRotate} setArrowAnimateRotate={setAmArrowAnimateRotate}
                arrowStiffness={amArrowStiffness} setArrowStiffness={setAmArrowStiffness}
                arrowDamping={amArrowDamping} setArrowDamping={setAmArrowDamping}
                arrowMass={amArrowMass} setArrowMass={setAmArrowMass}
                arrowDelay={amArrowDelay} setArrowDelay={setAmArrowDelay}
              />
            )}
            {currentIcon === 'figureWalk' && (
              <FigureWalkControls
                width={fwWidth} setWidth={setFwWidth}
                height={fwHeight} setHeight={setFwHeight}
                fillColor={fwFillColor} setFillColor={setFwFillColor}
                motionLinesFillOpacity={fwMotionLinesFillOpacity} setMotionLinesFillOpacity={setFwMotionLinesFillOpacity}
                motionLinesInitialX={fwMotionLinesInitialX} setMotionLinesInitialX={setFwMotionLinesInitialX}
                motionLinesInitialOpacity={fwMotionLinesInitialOpacity} setMotionLinesInitialOpacity={setFwMotionLinesInitialOpacity}
                motionLinesAnimateX={fwMotionLinesAnimateX} setMotionLinesAnimateX={setFwMotionLinesAnimateX}
                motionLinesAnimateOpacity={fwMotionLinesAnimateOpacity} setMotionLinesAnimateOpacity={setFwMotionLinesAnimateOpacity}
                motionLinesStiffness={fwMotionLinesStiffness} setMotionLinesStiffness={setFwMotionLinesStiffness}
                motionLinesDamping={fwMotionLinesDamping} setMotionLinesDamping={setFwMotionLinesDamping}
                motionLinesMass={fwMotionLinesMass} setMotionLinesMass={setFwMotionLinesMass}
                motionLinesDelay={fwMotionLinesDelay} setMotionLinesDelay={setFwMotionLinesDelay}
                figureFillOpacity={fwFigureFillOpacity} setFigureFillOpacity={setFwFigureFillOpacity}
                figureInitialScale={fwFigureInitialScale} setFigureInitialScale={setFwFigureInitialScale}
                figureInitialOpacity={fwFigureInitialOpacity} setFigureInitialOpacity={setFwFigureInitialOpacity}
                figureInitialX={fwFigureInitialX} setFigureInitialX={setFwFigureInitialX}
                figureInitialY={fwFigureInitialY} setFigureInitialY={setFwFigureInitialY}
                figureInitialRotate={fwFigureInitialRotate} setFigureInitialRotate={setFwFigureInitialRotate}
                figureAnimateScale={fwFigureAnimateScale} setFigureAnimateScale={setFwFigureAnimateScale}
                figureAnimateOpacity={fwFigureAnimateOpacity} setFigureAnimateOpacity={setFwFigureAnimateOpacity}
                figureAnimateX={fwFigureAnimateX} setFigureAnimateX={setFwFigureAnimateX}
                figureAnimateY={fwFigureAnimateY} setFigureAnimateY={setFwFigureAnimateY}
                figureAnimateRotate={fwFigureAnimateRotate} setFigureAnimateRotate={setFwFigureAnimateRotate}
                figureStiffness={fwFigureStiffness} setFigureStiffness={setFwFigureStiffness}
                figureDamping={fwFigureDamping} setFigureDamping={setFwFigureDamping}
                figureMass={fwFigureMass} setFigureMass={setFwFigureMass}
                figureDelay={fwFigureDelay} setFigureDelay={setFwFigureDelay}
              />
            )}
          </IconControls>

          {/* Button Hover Example Section - Currently only uses ArrowMessageIcon */}
          {currentIcon === 'arrowMessage' && (
            <div className="pt-8 border-t border-zinc-700 w-full flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4 text-zinc-400">Button Hover Example</h2>
              <motion.button
                onHoverStart={() => setIsButtonHovered(true)}
                onHoverEnd={() => setIsButtonHovered(false)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex items-center space-x-2 transition-colors duration-150"
              >
                <span>Send a Message</span>
                <IconArrowUpMessageFill
                  width={24}
                  height={24}
                  bubbleFill={amBubbleFillColor}
                  arrowFill={amArrowFillColor}
                  bubbleFillOpacity={amBubbleFillOpacity}
                  bubbleScaleKeyframes={amBubbleScaleKeyframes.length > 0 ? amBubbleScaleKeyframes : [0, 1.05, 1]}
                  bubbleStiffness={amBubbleStiffness}
                  bubbleDamping={amBubbleDamping}
                  bubbleMass={amBubbleMass}
                  bubbleDelay={0} 
                  arrowState={isButtonHovered ? "animate" : "initial"}
                  arrowInitialScale={amArrowInitialScale}
                  arrowAnimateScale={amArrowAnimateScale}
                  arrowInitialOpacity={amArrowInitialOpacity}
                  arrowAnimateOpacity={amArrowAnimateOpacity}
                  arrowInitialX={amArrowInitialX}
                  arrowAnimateX={amArrowAnimateX}
                  arrowInitialY={amArrowInitialY}
                  arrowAnimateY={amArrowAnimateY}
                  arrowInitialRotate={amArrowInitialRotate}
                  arrowAnimateRotate={amArrowAnimateRotate}
                  arrowStiffness={amArrowStiffness}
                  arrowDamping={amArrowDamping}
                  arrowMass={amArrowMass}
                  arrowDelay={amArrowDelay} 
                />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}