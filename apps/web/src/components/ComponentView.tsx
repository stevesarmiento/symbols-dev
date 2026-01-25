"use client";

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FolderTab } from './FolderTab';

interface ComponentViewerProps {
  iconName: string;
  componentCode: string;
  copiedComponent: boolean;
  onCopyComponent: () => void;
}

export function ComponentViewer({ 
  iconName, 
  componentCode, 
  copiedComponent, 
  onCopyComponent 
}: ComponentViewerProps) {
  return (
    <div 
      className="p-6 h-[calc(100dvh-6rem)]"
      style={{
        backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(233, 231, 222, 0.05) 10px,
            rgba(233, 231, 222, 0.05) 11px
        )`,
    }}
      >      
      <div className="relative">
        <FolderTab 
          iconName={iconName}
          copiedComponent={copiedComponent}
          onCopyComponent={onCopyComponent}
        />
        
        <div className="max-h-[calc(100dvh-11rem)] overflow-x-auto bg-zinc-800 corner-squircle rounded-[30px] rounded-tl-none border border-zinc-800">
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '0.77rem',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              }
            }}
          >
            {componentCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}