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
                    damping: 20,
                    stiffness: 300
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
                  <CommandEmpty className="p-2 text-center text-sm">No icons found.</CommandEmpty>
                  {icons.length > 0 && (
                    <CommandGroup heading="Icons" className="p-1">
                      {icons.map(([name, IconComponent]) => (
                        <CommandItem
                          key={name}
                          value={name}
                          onSelect={() => handleIconSelect(name)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-white/10"
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
        </Command>
      </motion.div>
    </div>
  )
}

export default CommandSearch