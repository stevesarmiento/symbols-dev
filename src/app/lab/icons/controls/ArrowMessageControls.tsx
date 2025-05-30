'use client';

import React from 'react';
import { Slider } from "@/components/ui/slider";

interface ArrowMessageControlsProps {
  width: number;
  setWidth: (value: number) => void;
  height: number;
  setHeight: (value: number) => void;
  bubbleFillColor: string;
  setBubbleFillColor: (value: string) => void;
  arrowFillColor: string;
  setArrowFillColor: (value: string) => void;
  bubbleFillOpacity: number;
  setBubbleFillOpacity: (value: number) => void;
  bubbleScaleKeyframesStr: string;
  setBubbleScaleKeyframesStr: (value: string) => void;
  bubbleStiffness: number;
  setBubbleStiffness: (value: number) => void;
  bubbleDamping: number;
  setBubbleDamping: (value: number) => void;
  bubbleMass: number;
  setBubbleMass: (value: number) => void;
  bubbleDelay: number;
  setBubbleDelay: (value: number) => void;
  arrowInitialScale: number;
  setArrowInitialScale: (value: number) => void;
  arrowAnimateScale: number;
  setArrowAnimateScale: (value: number) => void;
  arrowInitialOpacity: number;
  setArrowInitialOpacity: (value: number) => void;
  arrowAnimateOpacity: number;
  setArrowAnimateOpacity: (value: number) => void;
  arrowInitialX: number;
  setArrowInitialX: (value: number) => void;
  arrowAnimateX: number;
  setArrowAnimateX: (value: number) => void;
  arrowInitialY: number;
  setArrowInitialY: (value: number) => void;
  arrowAnimateY: number;
  setArrowAnimateY: (value: number) => void;
  arrowInitialRotate: number;
  setArrowInitialRotate: (value: number) => void;
  arrowAnimateRotate: number;
  setArrowAnimateRotate: (value: number) => void;
  arrowStiffness: number;
  setArrowStiffness: (value: number) => void;
  arrowDamping: number;
  setArrowDamping: (value: number) => void;
  arrowMass: number;
  setArrowMass: (value: number) => void;
  arrowDelay: number;
  setArrowDelay: (value: number) => void;
}

export function ArrowMessageControls({
  width, setWidth,
  height, setHeight,
  bubbleFillColor, setBubbleFillColor,
  arrowFillColor, setArrowFillColor,
  bubbleFillOpacity, setBubbleFillOpacity,
  bubbleScaleKeyframesStr, setBubbleScaleKeyframesStr,
  bubbleStiffness, setBubbleStiffness,
  bubbleDamping, setBubbleDamping,
  bubbleMass, setBubbleMass,
  bubbleDelay, setBubbleDelay,
  arrowInitialScale, setArrowInitialScale,
  arrowAnimateScale, setArrowAnimateScale,
  arrowInitialOpacity, setArrowInitialOpacity,
  arrowAnimateOpacity, setArrowAnimateOpacity,
  arrowInitialX, setArrowInitialX,
  arrowAnimateX, setArrowAnimateX,
  arrowInitialY, setArrowInitialY,
  arrowAnimateY, setArrowAnimateY,
  arrowInitialRotate, setArrowInitialRotate,
  arrowAnimateRotate, setArrowAnimateRotate,
  arrowStiffness, setArrowStiffness,
  arrowDamping, setArrowDamping,
  arrowMass, setArrowMass,
  arrowDelay, setArrowDelay,
}: ArrowMessageControlsProps) {
  const textInputClassName = "mr-2 mb-1 px-2 py-1 bg-zinc-700 text-white border border-zinc-600 rounded text-sm w-full";
  const sliderGroupClassName = "flex flex-col space-y-1 mb-3";
  const sliderLabelClassName = "text-sm text-zinc-300";

  return (
    <>
      {/* General & Bubble Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-400 border-b border-zinc-600 pb-2 mb-3">General & Bubble</h2>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Width: <span className="text-zinc-400 font-mono">{width}px</span></label>
          <Slider defaultValue={[width]} value={[width]} onValueChange={([val]) => setWidth(val)} max={512} min={16} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Height: <span className="text-zinc-400 font-mono">{height}px</span></label>
          <Slider defaultValue={[height]} value={[height]} onValueChange={([val]) => setHeight(val)} max={512} min={16} step={1} />
        </div>
        <div>
          <label className={sliderLabelClassName}>Bubble Fill Color:</label>
          <input type="text" className={textInputClassName} value={bubbleFillColor} onChange={(e) => setBubbleFillColor(e.target.value)} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Bubble Opacity: <span className="text-zinc-400 font-mono">{bubbleFillOpacity.toFixed(2)}</span></label>
          <Slider defaultValue={[bubbleFillOpacity]} value={[bubbleFillOpacity]} onValueChange={([val]) => setBubbleFillOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div>
          <label className={sliderLabelClassName}>Bubble Scale KF (csv):</label>
          <input type="text" className={textInputClassName} value={bubbleScaleKeyframesStr} onChange={(e) => setBubbleScaleKeyframesStr(e.target.value)} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Bubble Stiffness: <span className="text-zinc-400 font-mono">{bubbleStiffness}</span></label>
          <Slider defaultValue={[bubbleStiffness]} value={[bubbleStiffness]} onValueChange={([val]) => setBubbleStiffness(val)} max={1000} min={10} step={10} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Bubble Damping: <span className="text-zinc-400 font-mono">{bubbleDamping}</span></label>
          <Slider defaultValue={[bubbleDamping]} value={[bubbleDamping]} onValueChange={([val]) => setBubbleDamping(val)} max={100} min={1} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Bubble Mass: <span className="text-zinc-400 font-mono">{bubbleMass.toFixed(1)}</span></label>
          <Slider defaultValue={[bubbleMass]} value={[bubbleMass]} onValueChange={([val]) => setBubbleMass(val)} max={5} min={0.1} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Bubble Delay (s): <span className="text-zinc-400 font-mono">{bubbleDelay.toFixed(1)}s</span></label>
          <Slider defaultValue={[bubbleDelay]} value={[bubbleDelay]} onValueChange={([val]) => setBubbleDelay(val)} max={5} min={0} step={0.1} />
        </div>
      </div>

      {/* Arrow Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-400 border-b border-zinc-600 pb-2 mb-3">Arrow</h2>
        <div>
          <label className={sliderLabelClassName}>Arrow Fill Color:</label>
          <input type="text" className={textInputClassName} value={arrowFillColor} onChange={(e) => setArrowFillColor(e.target.value)} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Initial Scale: <span className="text-zinc-400 font-mono">{arrowInitialScale.toFixed(1)}</span></label>
          <Slider defaultValue={[arrowInitialScale]} value={[arrowInitialScale]} onValueChange={([val]) => setArrowInitialScale(val)} max={2} min={0} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Animate Scale: <span className="text-zinc-400 font-mono">{arrowAnimateScale.toFixed(1)}</span></label>
          <Slider defaultValue={[arrowAnimateScale]} value={[arrowAnimateScale]} onValueChange={([val]) => setArrowAnimateScale(val)} max={2} min={0} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Initial Opacity: <span className="text-zinc-400 font-mono">{arrowInitialOpacity.toFixed(2)}</span></label>
          <Slider defaultValue={[arrowInitialOpacity]} value={[arrowInitialOpacity]} onValueChange={([val]) => setArrowInitialOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Animate Opacity: <span className="text-zinc-400 font-mono">{arrowAnimateOpacity.toFixed(2)}</span></label>
          <Slider defaultValue={[arrowAnimateOpacity]} value={[arrowAnimateOpacity]} onValueChange={([val]) => setArrowAnimateOpacity(val)} max={1} min={0} step={0.01} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Initial X (px): <span className="text-zinc-400 font-mono">{arrowInitialX}px</span></label>
          <Slider defaultValue={[arrowInitialX]} value={[arrowInitialX]} onValueChange={([val]) => setArrowInitialX(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Animate X (px): <span className="text-zinc-400 font-mono">{arrowAnimateX}px</span></label>
          <Slider defaultValue={[arrowAnimateX]} value={[arrowAnimateX]} onValueChange={([val]) => setArrowAnimateX(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Initial Y (px): <span className="text-zinc-400 font-mono">{arrowInitialY}px</span></label>
          <Slider defaultValue={[arrowInitialY]} value={[arrowInitialY]} onValueChange={([val]) => setArrowInitialY(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Animate Y (px): <span className="text-zinc-400 font-mono">{arrowAnimateY}px</span></label>
          <Slider defaultValue={[arrowAnimateY]} value={[arrowAnimateY]} onValueChange={([val]) => setArrowAnimateY(val)} max={50} min={-50} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Initial Rotate (°): <span className="text-zinc-400 font-mono">{arrowInitialRotate}°</span></label>
          <Slider defaultValue={[arrowInitialRotate]} value={[arrowInitialRotate]} onValueChange={([val]) => setArrowInitialRotate(val)} max={360} min={-360} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Animate Rotate (°): <span className="text-zinc-400 font-mono">{arrowAnimateRotate}°</span></label>
          <Slider defaultValue={[arrowAnimateRotate]} value={[arrowAnimateRotate]} onValueChange={([val]) => setArrowAnimateRotate(val)} max={360} min={-360} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Stiffness: <span className="text-zinc-400 font-mono">{arrowStiffness}</span></label>
          <Slider defaultValue={[arrowStiffness]} value={[arrowStiffness]} onValueChange={([val]) => setArrowStiffness(val)} max={1000} min={10} step={10} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Damping: <span className="text-zinc-400 font-mono">{arrowDamping}</span></label>
          <Slider defaultValue={[arrowDamping]} value={[arrowDamping]} onValueChange={([val]) => setArrowDamping(val)} max={100} min={1} step={1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Mass: <span className="text-zinc-400 font-mono">{arrowMass.toFixed(1)}</span></label>
          <Slider defaultValue={[arrowMass]} value={[arrowMass]} onValueChange={([val]) => setArrowMass(val)} max={5} min={0.1} step={0.1} />
        </div>
        <div className={sliderGroupClassName}>
          <label className={sliderLabelClassName}>Arrow Delay (s): <span className="text-zinc-400 font-mono">{arrowDelay.toFixed(1)}s</span></label>
          <Slider defaultValue={[arrowDelay]} value={[arrowDelay]} onValueChange={([val]) => setArrowDelay(val)} max={5} min={0} step={0.1} />
        </div>
      </div>
    </>
  );
}