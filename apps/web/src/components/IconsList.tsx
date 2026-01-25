import React, { useState } from 'react';
import { IconPaperclip, IconExclamationmarkTriangleFill, IconCheckmarkCircleFill, IconCheckmark } from 'symbols-react';
import { motion } from "motion/react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"
import { useRouter } from 'next/navigation';

export interface IconProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    fill?: string;
}

interface IconsListProps {
    filteredIcons: [string, React.ComponentType<IconProps>][];
    loadMoreRef: (node?: Element | null) => void;
}

const IconsList: React.FC<IconsListProps> = ({ filteredIcons, loadMoreRef }) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const router = useRouter();

    const handleCopy = (name: string, index: number) => {
        navigator.clipboard.writeText(name);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1000);
        toast(
            <div className="inline-flex items-center gap-2">
                <IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
                <p><span className="opacity-50">You copied</span> {name.replace('Icon', '')} <span className="opacity-50">to clipboard</span></p>
            </div>
        );
    };

    const handleIconClick = (iconName: string) => {
        router.push(`/icon/${iconName}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 }
        }
    };

    if (!filteredIcons.length) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center justify-center min-h-[60vh] w-full">
                <div className="p-10 max-w-xl text-center">
                    <div className="bg-yellow-500/5 w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center">
                        <IconExclamationmarkTriangleFill className="fill-yellow-500" width={44} height={44} />
                    </div>
                    <h2 className="text-2xl mb-2 text-white font-diatype-medium">Oops! Sorry about that.</h2>
                    <p className="text-white/50 font-berkeley-mono text-md">We don&apos;t have that one right now, but if you need a certain icon added to symbols, <a href="mailto:sarmiento.steven@gmail.com" className="text-blue-300 hover:text-blue-400">do let me know</a>.</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div 
            className="grid grid-cols-3 sm:grid-cols-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            
        >
            {filteredIcons.map(([name, Icon], index) => (
                <div
                    key={name}
                    className="flex flex-col justify-center border-r border-b border-white/5 p-0"
                >
                    <button
                        type="button"
                        aria-label={`View ${name.replace('Icon', '')} icon`}
                        className="group cursor-pointer h-[130px] w-full flex justify-center items-center hover:bg-white/5 transition-all duration-150 ease-in-out"
                        onClick={() => handleIconClick(name)}
                        style={{
                            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1.5px)',
                            backgroundSize: '32px 32px',
                          }}
                    >
                        <Icon className="group-hover:scale-125 transition-all duration-150 ease-in-out fill-white" width={35} height={35} />
                    </button>
                    <div className="inline-flex justify-between items-center border-t border-white/5 p-2">
                        <span className="text-xs text-white/50 font-mono fade-out">{name.replace('Icon', '')}</span>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <button
                                        type="button"
                                        aria-label="Copy icon name"
                                        className="group flex items-center justify-center w-[26px] h-[26px] bg-white/10 rounded-lg p-[5px] transition-all duration-150 ease-in-out hover:bg-white/20 hover:scale-95 focus:outline-none"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCopy(name, index);
                                        }}
                                    >
                                        {copiedIndex === index ? (
                                            <IconCheckmark className="fill-white scale-in w-[12px] h-[12px]" />
                                        ) : (
                                            <IconPaperclip className="fill-white/50 group-hover:-rotate-[10deg] scale-in" width={16} height={16} />
                                        )}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-800">
                                    <p className="text-white text-xs">Copy to clipboard</p>
                                </TooltipContent>
                            </Tooltip>
                    </div>
                </div>
            ))}
            <div ref={loadMoreRef} className="col-span-full h-20" />
        </motion.div>
    );
};

export default IconsList;