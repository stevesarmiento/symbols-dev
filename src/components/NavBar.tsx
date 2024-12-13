'use client'

import React from 'react';
import { IconHeartFill } from 'symbols-react';
import Link from 'next/link';
import NpmButton from './NpmButton';
import { useFramework } from '@/context/framework-provider';
import CommandSearch from './CommandSearch';
import { useRouter, useSearchParams } from 'next/navigation';


const NavBar = () => {
    const { version, selectedFramework } = useFramework();
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        router.push(`/?${params.toString()}`);
    };

    return (
        <nav className="z-50 sticky top-0 p-0 sm:px-4 sm:py-2 px-8 text-white backdrop-blur-fallback border-b border-b-white/10">
            <div className="flex w-full items-center justify-between m-auto">
                <div className="flex items-center">
                    <div className="inline-flex items-center">
                        <div className="bg-blue-500 w-5 h-5 sm:w-8 sm:h-8 rounded-lg p-1 flex justify-center items-center">
                            <IconHeartFill className="fill-white w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <Link className="relative flex items-center" href="/">
                            <span className="crossed-out relative font-semibold text-xl sm:text-3xl text-white ml-2 font-mono">SF</span>
                            <span className="font-semibold text-xl sm:text-3xl text-white ml-2 font-mono">Symbols</span>
                        </Link>
                    </div>
                    <div className="ml-2 mt-[5px]">
                        <a href={`https://www.npmjs.com/package/symbols-${selectedFramework.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                            <span className="text-xs text-white/50 bg-white/10 border border-white/10 px-2 py-[3px] rounded-full hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-150 ease-in-out">{version}</span>
                        </a>
                    </div>

                </div>
                <CommandSearch setSearchTerm={handleSearch} />
                <div className="inline-flex gap-4 justify-center items-center">
                    <NpmButton selectedFramework="react" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;