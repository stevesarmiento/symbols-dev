'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FrameworkContextType {
    selectedFramework: string;
    setSelectedFramework: (framework: string) => void;
    version: string;
    setVersion: (version: string) => void;
}

const FrameworkContext = createContext<FrameworkContextType | undefined>(undefined);

export const FrameworkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedFramework, setSelectedFramework] = useState('React');
    const [version, setVersion] = useState('1.1.2');

    return (
        <FrameworkContext.Provider value={{ selectedFramework, setSelectedFramework, version, setVersion }}>
            {children}
        </FrameworkContext.Provider>
    );
};

export const useFramework = () => {
    const context = useContext(FrameworkContext);
    if (context === undefined) {
        throw new Error('useFramework must be used within a FrameworkProvider');
    }
    return context;
};