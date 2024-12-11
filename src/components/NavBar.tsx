'use client'

import React, { useState, useEffect } from 'react';
import { IconAppGiftFill, IconTwitterLogo } from 'symbols-react';
import Link from 'next/link';
import NpmButton from './NpmButton';
import { useFramework } from '@/context/framework-provider';

const NavBar = () => {
    const [showButton, setShowButton] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const { version, selectedFramework } = useFramework();

    const handleCopy = () => {
        navigator.clipboard.writeText('npm i symbols-react');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100;
            setShowButton(show);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="z-50 sticky top-0 p-0 sm:p-4 px-8 text-white backdrop-blur-fallback border-b border-b-white/10">
            <div className="flex w-full items-center justify-between m-auto">
                <div className="flex items-center">
                    <div className="inline-flex items-center">
                        <div className="bg-blue-500 w-5 h-5 sm:w-8 sm:h-8 rounded-lg p-1 flex justify-center items-center">
                            <IconAppGiftFill className="fill-white w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <Link href="/">
                            <span className="font-semibold text-xl sm:text-4xl text-white ml-2 font-mono">Symbols</span>
                        </Link>
                    </div>
                    <div className="ml-2 mt-[8px]">
                        <a href={`https://www.npmjs.com/package/symbols-${selectedFramework.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                            <span className="text-xs text-white/50 bg-white/10 border border-white/10 px-2 py-[3px] rounded-full hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-150 ease-in-out">{version}</span>
                        </a>
                    </div>

                </div>
                <div className="inline-flex gap-4 justify-center items-center">
                    <div className={`${showButton ? 'github-btn-visible group' : 'github-btn-hidden'}`}>
                        <NpmButton selectedFramework="react" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;