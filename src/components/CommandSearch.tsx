"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconProps } from '@/components/IconsList'
import * as Icons from 'symbols-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { motion, AnimatePresence } from 'framer-motion'
import { TextShimmer } from "@/components/ui/text-shimmer";

interface CommandSearchProps {
  initialValue?: string;
}

export function CommandSearch({ initialValue }: CommandSearchProps) {
    const [inputValue, setInputValue] = useState(initialValue || "")
    const [icons, setIcons] = useState<[string, React.ComponentType<IconProps>][]>([])
    const router = useRouter()

    const updateFilteredIcons = useCallback((currentVal: string) => {
        if (!currentVal) {
            setIcons([]);
            return;
        }
        const iconEntries = Object.entries(Icons)
          .filter(([name]) => 
            name.startsWith('Icon') && 
            name.toLowerCase().includes(currentVal.toLowerCase())
          )
          .slice(0, 100)
        setIcons(iconEntries)
    }, []);

    useEffect(() => {
        setInputValue(initialValue || "");
        updateFilteredIcons(initialValue || "");
    }, [initialValue, updateFilteredIcons]);

    const handleInputChange = useCallback((input: string) => {
        setInputValue(input);
        updateFilteredIcons(input);
    }, [updateFilteredIcons]);
    
    const handleIconSelect = (iconName: string) => {
        router.push(`/icon/${iconName}`);
        setInputValue("");
        setIcons([]);
    };

    const handleRandomIcon = useCallback(() => {
        const iconNames = Object.keys(Icons).filter(name => name.startsWith('Icon'));
        if (iconNames.length === 0) return;
        const randomIcon = iconNames[Math.floor(Math.random() * iconNames.length)];
        router.push(`/icon/${randomIcon}`);
    }, [router]);

  return (
    <div className="w-full">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
          mass: 0.3,
        }}
      >
        <Command className="h-auto w-full transform-origin-top">
          <CommandInput 
            placeholder="Search over 6,000 symbols..." 
            value={inputValue}
            onValueChange={handleInputChange}
          />
          
          <AnimatePresence>
            {inputValue && (
              <motion.div
                initial={{ 
                  opacity: 0,
                  y: -20,
                  filter: 'blur(4px)'
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                    mass: 0.3,
                  }
                }}
                exit={{ 
                  opacity: 0,
                  y: -20,
                  filter: 'blur(4px)'
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                  mass: 0.3,
                }}
                className="max-h-[300px] min-h-[300px] overflow-y-auto rounded-lg bg-zinc-950 shadow-md w-full backdrop-blur-sm mt-4"
                style={{
                  maskImage: 'linear-gradient(to bottom, black calc(100% - 5rem), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 5rem), transparent 100%)',
                }}
              >
                <CommandList>
                  <CommandEmpty className="p-6 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="bg-zinc-800/50 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icons.IconEnvelopeFill className="h-6 w-6 fill-zinc-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-white">Symbol not found?</h3>
                        <p className="text-xs text-zinc-400 max-w-xs">
                          Don&apos;t see the symbol you&apos;re looking for? Just send me a note and I&apos;ll add it to the library for you.
                        </p>
                      </div>
                      <a
                        href="mailto:sarmiento.steven@gmail.com?subject=Symbol Request&body=Hi! I'd like to request the following symbol to be added to the library:"
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-150 active:scale-[0.98]"
                      >
                        <Icons.IconPaperplaneFill className="h-3 w-3 fill-current" />
                        Request Symbol
                      </a>
                    </div>
                  </CommandEmpty>
                  {icons.length > 0 && (
                    <CommandGroup heading="Icons" className="p-1 text-white/80">
                      {icons.map(([name, IconComponent]) => (
                        <CommandItem
                          key={name}
                          value={name}
                          onSelect={() => handleIconSelect(name)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-zinc-800 active:scale-[0.98] transition-all duration-150"
                        >
                          <IconComponent className="h-4 w-4 fill-current" />
                          <span>{name.replace('Icon', '')}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}
                </CommandList>
              </motion.div>
            )}
          </AnimatePresence>
          {icons.length === 0 && (
          <button
            onClick={handleRandomIcon}
            className="mt-4 w-full flex items-center justify-center gap-2 font-mono active:scale-[0.98] transition-all duration-150"
          >
            <TextShimmer className="text-xs hover:scale-105">
              I&apos;m Feeling Lucky
            </TextShimmer>
          </button>
          )}
        </Command>
      </motion.div>
    </div>
  )
}

export default CommandSearch