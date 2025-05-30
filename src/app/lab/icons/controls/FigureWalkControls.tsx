'use client';

import React from 'react';
import { Slider } from "@/components/ui/slider";

interface FigureWalkControlsProps {
  // General display props (can also be part of a 'general' section if preferred)
  width: number;
  setWidth: (value: number) => void;
  height: number;
  setHeight: (value: number) => void;
  fillColor: string;
  setFillColor: (value: string) => void;

  // Motion Lines Animation Props
  motionLinesFillOpacity: number;
  setMotionLinesFillOpacity: (value: number) => void;
  motionLinesInitialX: number;
  setMotionLinesInitialX: (value: number) => void;
  motionLinesInitialOpacity: number;
  setMotionLinesInitialOpacity: (value: number) => void;
  motionLinesAnimateX: number;
  setMotionLinesAnimateX: (value: number) => void;
  motionLinesAnimateOpacity: number;
  setMotionLinesAnimateOpacity: (value: number) => void;
  motionLinesStiffness: number;
  setMotionLinesStiffness: (value: number) => void;
  motionLinesDamping: number;
  setMotionLinesDamping: (value: number) => void;
  motionLinesMass: number;
  setMotionLinesMass: (value: number) => void;
  motionLinesDelay: number;
  setMotionLinesDelay: (value: number) => void;

  // Figure Animation Props
  figureFillOpacity: number;
  setFigureFillOpacity: (value: number) => void;
  figureInitialScale: number;
  setFigureInitialScale: (value: number) => void;
  figureInitialOpacity: number;
  setFigureInitialOpacity: (value: number) => void;
  figureInitialX: number;
  setFigureInitialX: (value: number) => void;
  figureInitialY: number;
  setFigureInitialY: (value: number) => void;
  figureInitialRotate: number;
  setFigureInitialRotate: (value: number) => void;
  figureAnimateScale: number;
  setFigureAnimateScale: (value: number) => void;
  figureAnimateOpacity: number;
  setFigureAnimateOpacity: (value: number) => void;
  figureAnimateX: number;
  setFigureAnimateX: (value: number) => void;
  figureAnimateY: number;
  setFigureAnimateY: (value: number) => void;
  figureAnimateRotate: number;
  setFigureAnimateRotate: (value: number) => void;
  figureStiffness: number;
  setFigureStiffness: (value: number) => void;
  figureDamping: number;
  setFigureDamping: (value: number) => void;
  figureMass: number;
  setFigureMass: (value: number) => void;
  figureDelay: number;
  setFigureDelay: (value: number) => void;
}

export function FigureWalkControls({
  width, setWidth,
  height, setHeight,
  fillColor, setFillColor,
  motionLinesFillOpacity, setMotionLinesFillOpacity,
  motionLinesInitialX, setMotionLinesInitialX,
  motionLinesInitialOpacity, setMotionLinesInitialOpacity,
  motionLinesAnimateX, setMotionLinesAnimateX,
  motionLinesAnimateOpacity, setMotionLinesAnimateOpacity,
  motionLinesStiffness, setMotionLinesStiffness,
  motionLinesDamping, setMotionLinesDamping,
  motionLinesMass, setMotionLinesMass,
  motionLinesDelay, setMotionLinesDelay,
  figureFillOpacity, setFigureFillOpacity,
  figureInitialScale, setFigureInitialScale,
  figureInitialOpacity, setFigureInitialOpacity,
  figureInitialX, setFigureInitialX,
  figureInitialY, setFigureInitialY,
  figureInitialRotate, setFigureInitialRotate,
  figureAnimateScale, setFigureAnimateScale,
  figureAnimateOpacity, setFigureAnimateOpacity,
  figureAnimateX, setFigureAnimateX,
  figureAnimateY, setFigureAnimateY,
  figureAnimateRotate, setFigureAnimateRotate,
  figureStiffness, setFigureStiffness,
  figureDamping, setFigureDamping,
  figureMass, setFigureMass,
  figureDelay, setFigureDelay,
}: FigureWalkControlsProps) {
  const textInputClassName = "mr-2 mb-1 px-2 py-1 bg-zinc-700 text-white border border-zinc-600 rounded text-sm w-full";
  const sliderGroupClassName = "flex flex-col space-y-1 mb-3";
  const sliderLabelClassName = "text-sm text-zinc-300";

  return (
    <>
      {/* General Section (for this icon) */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-400 border-b border-zinc-600 pb-2 mb-3">General Display</h2>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Width: <span className="text-zinc-400 font-mono">{width}px</span></label>
          <Slider value={[width]} onValueChange={([val]) => setWidth(val)} max={512} min={16} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Height: <span className="text-zinc-400 font-mono">{height}px</span></label>
          <Slider value={[height]} onValueChange={([val]) => setHeight(val)} max={512} min={16} step={1} />
        </div>
        <div>
          <label className={sliderLabelClassName}>Fill Color:</label>
          <input type="text" className={textInputClassName} value={fillColor} onChange={(e) => setFillColor(e.target.value)} />
        </div>
      </div>

      {/* Motion Lines Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-400 border-b border-zinc-600 pb-2 mb-3">Motion Lines</h2>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Fill Opacity: <span className="text-zinc-400 font-mono">{motionLinesFillOpacity.toFixed(2)}</span></label>
          <Slider value={[motionLinesFillOpacity]} onValueChange={([val]) => setMotionLinesFillOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial X: <span className="text-zinc-400 font-mono">{motionLinesInitialX}px</span></label>
          <Slider value={[motionLinesInitialX]} onValueChange={([val]) => setMotionLinesInitialX(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate X: <span className="text-zinc-400 font-mono">{motionLinesAnimateX}px</span></label>
          <Slider value={[motionLinesAnimateX]} onValueChange={([val]) => setMotionLinesAnimateX(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial Opacity: <span className="text-zinc-400 font-mono">{motionLinesInitialOpacity.toFixed(2)}</span></label>
          <Slider value={[motionLinesInitialOpacity]} onValueChange={([val]) => setMotionLinesInitialOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate Opacity: <span className="text-zinc-400 font-mono">{motionLinesAnimateOpacity.toFixed(2)}</span></label>
          <Slider value={[motionLinesAnimateOpacity]} onValueChange={([val]) => setMotionLinesAnimateOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Stiffness: <span className="text-zinc-400 font-mono">{motionLinesStiffness}</span></label>
          <Slider value={[motionLinesStiffness]} onValueChange={([val]) => setMotionLinesStiffness(val)} max={1000} min={10} step={10} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Damping: <span className="text-zinc-400 font-mono">{motionLinesDamping}</span></label>
          <Slider value={[motionLinesDamping]} onValueChange={([val]) => setMotionLinesDamping(val)} max={100} min={1} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Mass: <span className="text-zinc-400 font-mono">{motionLinesMass.toFixed(1)}</span></label>
          <Slider value={[motionLinesMass]} onValueChange={([val]) => setMotionLinesMass(val)} max={5} min={0.1} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Delay (s): <span className="text-zinc-400 font-mono">{motionLinesDelay.toFixed(1)}s</span></label>
          <Slider value={[motionLinesDelay]} onValueChange={([val]) => setMotionLinesDelay(val)} max={5} min={0} step={0.1} />
        </div>
      </div>

      {/* Figure Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-400 border-b border-zinc-600 pb-2 mb-3">Figure</h2>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Fill Opacity: <span className="text-zinc-400 font-mono">{figureFillOpacity.toFixed(2)}</span></label>
          <Slider value={[figureFillOpacity]} onValueChange={([val]) => setFigureFillOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial Scale: <span className="text-zinc-400 font-mono">{figureInitialScale.toFixed(1)}</span></label>
          <Slider value={[figureInitialScale]} onValueChange={([val]) => setFigureInitialScale(val)} max={2} min={0} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate Scale: <span className="text-zinc-400 font-mono">{figureAnimateScale.toFixed(1)}</span></label>
          <Slider value={[figureAnimateScale]} onValueChange={([val]) => setFigureAnimateScale(val)} max={2} min={0} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial Opacity: <span className="text-zinc-400 font-mono">{figureInitialOpacity.toFixed(2)}</span></label>
          <Slider value={[figureInitialOpacity]} onValueChange={([val]) => setFigureInitialOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate Opacity: <span className="text-zinc-400 font-mono">{figureAnimateOpacity.toFixed(2)}</span></label>
          <Slider value={[figureAnimateOpacity]} onValueChange={([val]) => setFigureAnimateOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial X: <span className="text-zinc-400 font-mono">{figureInitialX}px</span></label>
          <Slider value={[figureInitialX]} onValueChange={([val]) => setFigureInitialX(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate X: <span className="text-zinc-400 font-mono">{figureAnimateX}px</span></label>
          <Slider value={[figureAnimateX]} onValueChange={([val]) => setFigureAnimateX(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial Y: <span className="text-zinc-400 font-mono">{figureInitialY}px</span></label>
          <Slider value={[figureInitialY]} onValueChange={([val]) => setFigureInitialY(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate Y: <span className="text-zinc-400 font-mono">{figureAnimateY}px</span></label>
          <Slider value={[figureAnimateY]} onValueChange={([val]) => setFigureAnimateY(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Initial Rotate (°): <span className="text-zinc-400 font-mono">{figureInitialRotate}°</span></label>
          <Slider value={[figureInitialRotate]} onValueChange={([val]) => setFigureInitialRotate(val)} max={360} min={-360} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Animate Rotate (°): <span className="text-zinc-400 font-mono">{figureAnimateRotate}°</span></label>
          <Slider value={[figureAnimateRotate]} onValueChange={([val]) => setFigureAnimateRotate(val)} max={360} min={-360} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Stiffness: <span className="text-zinc-400 font-mono">{figureStiffness}</span></label>
          <Slider value={[figureStiffness]} onValueChange={([val]) => setFigureStiffness(val)} max={1000} min={10} step={10} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Damping: <span className="text-zinc-400 font-mono">{figureDamping}</span></label>
          <Slider value={[figureDamping]} onValueChange={([val]) => setFigureDamping(val)} max={100} min={1} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Mass: <span className="text-zinc-400 font-mono">{figureMass.toFixed(1)}</span></label>
          <Slider value={[figureMass]} onValueChange={([val]) => setFigureMass(val)} max={5} min={0.1} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Delay (s): <span className="text-zinc-400 font-mono">{figureDelay.toFixed(1)}s</span></label>
          <Slider value={[figureDelay]} onValueChange={([val]) => setFigureDelay(val)} max={5} min={0} step={0.1} />
        </div>
      </div>
    </>
  );
}