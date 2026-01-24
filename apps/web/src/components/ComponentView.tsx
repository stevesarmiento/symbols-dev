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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">React Component</h2>
      </div>
      
      <div className="relative">
        <FolderTab 
          iconName={iconName}
          copiedComponent={copiedComponent}
          onCopyComponent={onCopyComponent}
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
            {componentCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}