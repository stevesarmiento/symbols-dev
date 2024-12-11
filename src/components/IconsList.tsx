import React, { useState, useEffect, useRef } from 'react';
import { IconPaperclip, IconExclamationmarkTriangleFill, IconCheckmarkCircleFill, IconCheckmark } from 'symbols-react';
import { motion } from 'framer-motion';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"

interface IconsListProps {
    filteredIcons: [string, React.ComponentType<any>][];
}

const IconsList: React.FC<IconsListProps> = ({ filteredIcons }) => {
    const [visibleIcons, setVisibleIcons] = useState<Set<number>>(new Set());
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (name: string, index: number) => {
        navigator.clipboard.writeText(name);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1000);
    };

    // Staggered animation configuration
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.3,
            },
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = iconRefs.current.indexOf(entry.target as HTMLDivElement);
                        setVisibleIcons((prevVisibleIcons) => {
                            const newVisibleIcons = new Set(prevVisibleIcons);
                            newVisibleIcons.add(index);
                            return newVisibleIcons;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '100px' }
        );

        iconRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [filteredIcons.length]);

    return (
        <motion.div className="grid grid-cols-3 sm:grid-cols-10 gap-4 sm:gap-4 py-24 p-8 sm:max-w-7xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >            {filteredIcons.length > 0 ? (

            filteredIcons.map(([name, Icon], index) => (
                <div
                    ref={(el) => { iconRefs.current[index] = el; }}
                    key={index}
                    className="flex flex-col justify-center"
                >
                    {visibleIcons.has(index) && (
                        <>
                            <div className="group cursor-crosshair bg-white/10 h-[80px] sm:h-[60px] md:h-[60px] lg:h-[80px] xl:h-[92px] w-full border border-white/5 rounded-2xl p-4 flex justify-center items-center">
                                <Icon className="group-hover:scale-125 transition-all duration-150 ease-in-out fill-white" width={35} height={35} />
                            </div>
                            <div className="inline-flex justify-between items-center mt-[6px] bg-white/5 border border-white/5 rounded-xl p-1 pl-2">
                                <span className="text-xs text-white/50 font-mono fade-out">{name.replace('Icon', '')}</span>
                                <TooltipProvider>
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger>
                                            <button
                                                className="group flex items-center justify-center w-[26px] h-[26px] bg-white/10 rounded-lg p-[5px] transition-all duration-150 ease-in-out hover:bg-white/20 hover:scale-95 focus:outline-none"
                                                onClick={() => {
                                                    handleCopy(name, index);
                                                    toast(
                                                        <div className="inline-flex items-center gap-2">
                                                            <IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
                                                            <p><span className="opacity-50">You copied</span> {name.replace('Icon', '')} <span className="opacity-50">to clipboard</span></p>
                                                        </div>
                                                    );
                                                }}
                                            >
                                                {copiedIndex === index ? (
                                                    <IconCheckmark className="fill-white scale-in w-[12px] h-[12px]" />
                                                ) : (
                                                    <IconPaperclip className="fill-white/50 group-hover:-rotate-[10deg] scale-in" width={16} height={16} />
                                                )}
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-white text-xs">Copy to clipboard</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>
                        </>
                    )}
                </div>
            ))
        ) : (
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="col-span-10 text-center text-white justify-center items-center w-full">
                <div className="bg-gray-800 bg-opacity-10 p-10 rounded-lg max-w-xl mx-auto">
                    <div className="bg-yellow-500/10 w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center">
                        <IconExclamationmarkTriangleFill className="fill-yellow-500" width={44} height={44} />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Oops! Sorry about that.</h2>
                    <p className="text-white/50">We don&apos;t that one right now, but if you need a certain icon added to symbols, <a href="mailto:sarmiento.steven@gmail.com" className="text-blue-300 hover:text-blue-400">do let me know</a>, I&apos;ll add it for you ASAP.</p>
                </div>
            </motion.div>
        )
            }
        </motion.div>
    );
};

export default IconsList;