"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { IconProps } from '@/components/IconsList'
import { IconMagnifyingglass } from 'symbols-react'
import * as Icons from 'symbols-react'
import { motion } from 'framer-motion'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

interface CommandSearchProps {
  setSearchTerm: (term: string) => void
}

export function CommandSearch({ setSearchTerm }: CommandSearchProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [icons, setIcons] = useState<[string, React.ComponentType<IconProps>][]>([])

    const handleSearch = useCallback((search: string) => {
        setValue(search)
        setSearchTerm(search)
        
        const iconEntries = Object.entries(Icons)
          .filter(([name]) => 
            name.startsWith('Icon') && 
            name.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 100)
        setIcons(iconEntries)
      }, [setSearchTerm])
    
      const clearSearch = () => {
        setValue("")
        setSearchTerm("")
      }


  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape' && value) {
        e.preventDefault()
        clearSearch()
      }
    }
  
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [value])

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => value ? clearSearch() : setOpen(true)}
        className="relative w-full max-w-lg rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
      >
        <div className="flex items-center gap-2">
            <IconMagnifyingglass className="h-5 w-5 fill-white/60" />
            <p className="flex-1 text-left text-white/60">
                {value || "Search icons..."}
            </p>
            <div className="flex items-center space-x-2 border border-white/10 px-2 py-1 rounded-md bg-white/5 backdrop-blur-sm">
                {value ? (
                <span className="text-white/60 font-mono">ESC</span>
                ) : (
                <>
                    <Icons.IconCommand className="h-3 w-3 fill-white/60" />
                    <span className="text-white/60">/</span>
                </>
                )}
            </div>
        </div>
      </motion.button>


      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search icons..." 
          value={value}
          onValueChange={handleSearch}
        />
        <CommandList>
          <CommandEmpty>No icons found.</CommandEmpty>
          {icons.length > 0 && (
            <CommandGroup heading="Icons">
                {icons.map(([name, Icon]) => (
                <CommandItem
                    key={name}
                    value={name}
                    onSelect={() => {
                    setValue(name)
                    setSearchTerm(name)
                    setOpen(false)
                    }}
                    className="flex items-center gap-2"
                >
                    <Icon className="h-4 w-4 fill-current" />
                    <span>{name.replace('Icon', '')}</span>
                </CommandItem>
                ))}
                </CommandGroup>
            )}
          </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandSearch