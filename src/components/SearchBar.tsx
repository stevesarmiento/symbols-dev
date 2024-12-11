import React, { useState, useEffect, useRef, useMemo } from 'react';
import { IconBinocularsFill, IconXmarkAppFill, IconK, IconCommand } from 'symbols-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
    setSearchTerm: (term: string) => void;

}

const BlurDiv = ({
    blurValue,
    gradientStops,
    zIndex,
}: {
    blurValue: number;
    gradientStops: string;
    zIndex: number;
    className?: string;
}) => (
    <div
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{
            zIndex,
            backdropFilter: `blur(${blurValue}px)`,
            WebkitBackdropFilter: `blur(${blurValue}px)`,
            maskImage: `linear-gradient(to top, ${gradientStops})`,
            WebkitMaskImage: `linear-gradient(to top, ${gradientStops})`,
        }}
    />
);

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
    const suggestions = useMemo(() => ["Search 5,000+ icons...", "Arrow", "Pencil", "Rectangle", "Checkmark", "Airpods", "Seal", "Stack"], []);
    const [placeholder, setPlaceholder] = useState(suggestions[0]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchTerm(value);
    };

    const clearInput = () => {
        setInputValue('');
        setSearchTerm('');
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey && event.key === 'k') {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (!isFocused) {
            const intervalId = setInterval(() => {
                setPlaceholder(prev => suggestions[(suggestions.indexOf(prev) + 1) % suggestions.length]);
            }, 3000);
            return () => clearInterval(intervalId);
        }
    }, [isFocused, suggestions]);

    return (
        <div className="flex items-center justify-center px-8 overflow-hidden">
            <div className="pointer-events-none absolute top-0 w-screen h-[450px]">
                <div className="relative h-[380px] w-screen">
                    <BlurDiv
                        zIndex={1}
                        blurValue={0.25}
                        gradientStops="rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%"
                    />
                    <BlurDiv
                        zIndex={2}
                        blurValue={0.5}
                        gradientStops="rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%"
                    />
                    <BlurDiv
                        zIndex={3}
                        blurValue={1}
                        gradientStops="rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%"
                    />
                    <BlurDiv
                        zIndex={4}
                        blurValue={3}
                        gradientStops="rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%"
                    />
                    <BlurDiv
                        zIndex={5}
                        blurValue={5}
                        gradientStops="rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%"
                    />
                    <BlurDiv
                        zIndex={6}
                        blurValue={10}
                        gradientStops="rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%"
                    />
                    <BlurDiv
                        zIndex={7}
                        blurValue={10}
                        gradientStops="rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%"
                    />
                    <BlurDiv
                        zIndex={8}
                        blurValue={10}
                        gradientStops="rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%"
                        className="bg-mauve-light-2 dark:bg-mauve-dark-2"
                    />
                </div>
            </div>
            <div className="flex w-full items-center justify-center px-4 md:px-8 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full rounded-[25px] shadow-lg  backdrop-blur-fallback p-4 border border-white/5 z-50"
                >
                    <div className={`flex items-center w-full shadow-lg rounded-[15px] backdrop-blur-fallback py-1 px-4 border border-white/5 ${isFocused ? 'border-white/30' : 'border-white/5'} z-50`}>
                        <IconBinocularsFill className="mr-2 fill-white/60" width={28} height={28} />
                        <motion.div
                            key={placeholder}
                            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                            transition={{ duration: 0.1 }}
                            className="w-full"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder={placeholder}
                                className="p-2 w-full bg-white/0 text-white focus:outline-none focus:ring-0 focus:border-transparent placeholder-text font-mono"
                                value={inputValue}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                            />
                        </motion.div>
                        <div className={`inline-flex justify-center items-center gap-2 ${inputValue ? 'icon-slide-out' : 'icon-slide-in'}`}>
                            {!inputValue ? (
                                <>
                                    <IconCommand className="fill-white/60 cursor-none bg-white/10 p-[5px] rounded-md ring-1 ring-white/20 border-b border-white/10" width={26} height={26} />
                                    <IconK className={`fill-white/60 cursor-none bg-white/10 p-[5px] rounded-md ring-1 ring-white/20 border-b border-white/10`} width={26} height={26} />
                                </>
                            ) : null}
                        </div>
                        <div className={`${inputValue ? 'icon-slide-in' : 'icon-slide-out'}`}>
                            {inputValue && (
                                <IconXmarkAppFill className="fill-white/40 cursor-pointer hover:fill-white/60 hover:scale-110 active:scale-100 transition-all duration-150 ease-in-out" width={26} height={26} onClick={clearInput} />
                            )}
                        </div>

                    </div>
                </motion.div>
            </div>

        </div>

    );
};

export default SearchBar;