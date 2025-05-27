'use client'

import React from 'react';
import { IconHeartFill } from 'symbols-react';
import Link from 'next/link';
import NpmButton from './NpmButton';
// import { useFramework } from '@/context/framework-provider';
// import { ModeToggle } from './ui/theme-toggle';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const NavBar = () => {
    return (
        <nav 
            className="z-50 sticky top-0 pt-12 w-full"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(0,0,0,0.2)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
        >
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                    <div className="inline-flex items-center">
                        <div className="bg-blue-500 w-5 h-5 sm:w-8 sm:h-8 rounded-lg p-1 flex justify-center items-center">
                            <IconHeartFill className="fill-white w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <Link className="relative flex items-center" href="/">
                            <span className="font-semibold text-2xl text-white ml-2 font-mono">Symbols</span>
                        </Link>
                    </div>
                    {/* <div className="ml-2 mt-[5px]">
                        <a href={`https://www.npmjs.com/package/symbols-${selectedFramework.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                            <span className="text-xs text-white/50 bg-white/10 border border-white/10 px-2 py-[3px] rounded-full hover:bg-white/20 hover:border-white/20 hover:text-white transition-all duration-150 ease-in-out">{version}</span>
                        </a>
                    </div> */}

                </div>
                <div className="flex items-center gap-2">
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <SidebarTrigger />
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-zinc-900 text-white text-xs">
                            <p>Favorites</p>
                        </TooltipContent>
                    </Tooltip>
                    <div className="h-[20px] w-[2px] rounded-full bg-zinc-800" />
                    <NpmButton selectedFramework="react" />
                </div>                    
            </div>
        </nav>
    );
};

export default NavBar;