"use client";

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FolderTab } from './FolderTab';
import { useAnimatedIconGenerator } from '@/hooks/use-animated-icon-generator';
import { AnimationType, AnimationConfig } from '@/lib/icon-animations';

interface ComponentViewProps {
  iconName: string;
  componentCode: string;
  svgContent: string;
  copiedComponent: boolean;
  onCopyComponent: () => void;
  showAnimated: boolean;
  setShowAnimated: (show: boolean) => void;
  selectedAnimation: AnimationType;
  setSelectedAnimation: (animation: AnimationType) => void;
  animationConfig: AnimationConfig;
  setAnimationConfig: (config: AnimationConfig) => void;
}

export function ComponentView({ 
  iconName, 
  componentCode, 
  svgContent,
  copiedComponent, 
  onCopyComponent,
  showAnimated,
  setShowAnimated,
  selectedAnimation,
  setSelectedAnimation,
  animationConfig,
  setAnimationConfig
}: ComponentViewProps) {

  const { generateAnimatedComponent } = useAnimatedIconGenerator({
    iconName,
    svgContent,
    animation: selectedAnimation,
    animationConfig,
  });

  const animatedComponentCode = generateAnimatedComponent;

  const handleCopyAnimated = () => {
    navigator.clipboard.writeText(animatedComponentCode);
    // Add toast notification if needed
  };

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">React Component</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAnimated(false)}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              !showAnimated ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            Static
          </button>
          <button
            onClick={() => setShowAnimated(true)}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              showAnimated ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            Animated
          </button>
        </div>
      </div>

      {showAnimated && (
        <div className="grid grid-cols-1 gap-4 p-4 bg-zinc-900 rounded-lg">
          {/* Animation Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Animation Type
              </label>
              <select
                value={selectedAnimation}
                onChange={(e) => setSelectedAnimation(e.target.value as AnimationType)}
                className="w-full p-2 text-xs bg-zinc-800 border border-zinc-700 rounded text-white"
              >
                <option value="pulse">Pulse</option>
                <option value="bounce">Bounce</option>
                <option value="spin">Spin</option>
                <option value="float">Float</option>
                <option value="wiggle">Wiggle</option>
                <option value="wave">Wave</option>
                <option value="morph">Morph</option>
                <option value="scaleIn">Scale In</option>
                <option value="fadeIn">Fade In</option>
                <option value="drawOn">Draw On</option>
                <option value="trace">Trace</option>
                <option value="reveal">Reveal</option>
                <option value="drawStaggered">Draw Staggered</option>
                <option value="writing">Writing Effect</option>
                <option value="typewriter">Typewriter</option>
                <option value="explode">Explode</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Duration (seconds)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                max="5"
                value={animationConfig.duration || 1}
                onChange={(e) => setAnimationConfig({
                  ...animationConfig,
                  duration: parseFloat(e.target.value)
                })}
                className="w-full p-2 text-xs bg-zinc-800 border border-zinc-700 rounded text-white"
              />
            </div>
          </div>
        </div>
      )}
      
      <div className="relative">
        <FolderTab 
          iconName={showAnimated ? `${iconName}Animated` : iconName}
          copiedComponent={copiedComponent}
          onCopyComponent={showAnimated ? handleCopyAnimated : onCopyComponent}
        />
        
        <div className="overflow-x-auto bg-zinc-800 rounded-xl rounded-tl-none border border-zinc-800">
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '0.875rem',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              }
            }}
          >
            {showAnimated ? animatedComponentCode : componentCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}