import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconCheckmark, IconPaperclip, IconCheckmarkCircleFill } from 'symbols-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { useFramework } from '@/context/framework-provider';


interface NpmButtonProps {
    selectedFramework: string;
}

const NpmButton: React.FC<NpmButtonProps> = (props) => {
    const [isCopied, setIsCopied] = useState(false);
    const { selectedFramework, setSelectedFramework, version, setVersion } = useFramework();

    const getFrameworkIcon = (framework: string) => {
        switch (framework) {
            case 'React':
                return <Image src="/logo-react.svg" alt="React Logo" width={20} height={20} />;
            case 'Vue':
                return <Image src="/logo-vue.svg" alt="Vue Logo" width={20} height={20} />;
            case 'Svelte':
                return <Image src="/logo-svelte.svg" alt="Svelte Logo" width={20} height={20} />;
            default:
                return <Image src="/logo-react.svg" alt="React Logo" width={20} height={20} />;
        }
    };

    const handleCopy = () => {
        let installCommand = '';
        switch (selectedFramework) {
            case 'React':
                installCommand = 'npm i symbols-react';
                break;
            case 'Vue':
                installCommand = 'npm i symbols-vue';
                break;
            case 'Svelte':
                installCommand = 'npm i symbols-svelte';
                break;
            default:
                installCommand = 'npm i symbols-react';
        }
        navigator.clipboard.writeText(installCommand);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
    };

    useEffect(() => {
        if (selectedFramework === 'React') {
            setVersion('1.2.6');
        } else if (selectedFramework === 'Vue') {
            setVersion('1.0.1');
        }
    }, [selectedFramework, setVersion]);

    return (
        <div className="inline-flex gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="group flex justify-center items-center bg-white/10 border border-white/0 hover:border-white/20 hover:bg-white/20 p-3 rounded-xl w-[45px] h-[45px] hover:scale-105 transition-all duration-150 ease-in-out">
                        <span className="group-hover:rotate-[-10deg]">
                            {getFrameworkIcon(selectedFramework)}
                        </span>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedFramework('React')}>
                        <div className="inline-flex gap-2">
                            <Image src="/logo-react.svg" alt="React icon" width={20} height={20} />
                            <span className="font-mono text-white">React</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedFramework('Vue')}>
                        <div className="inline-flex gap-2">
                            <Image src="/logo-vue.svg" alt="Vue icon" width={20} height={20} />
                            <span className="font-mono text-white">Vue</span>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedFramework('Svelte')}>
                        <div className="inline-flex gap-2">
                            <Image src="/logo-svelte.svg" alt="Svelte icon" width={20} height={20} />
                            <span className="font-mono text-white">Svelte</span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="inline-flex gap-4 items-center">
                <button
                    className={`group inline-flex justify-between gap-4 bg-white/10 ${selectedFramework === 'React' || selectedFramework === 'Vue' ? 'border border-white/0 hover:border-white/20 hover:bg-white/20' : 'border border-white/20 bg-white/20'} text-white py-2 pl-4 pr-2 font-mono rounded-xl transition-all duration-150 ease-in-out ${selectedFramework === 'React' || selectedFramework === 'Vue' ? 'hover:scale-105' : 'cursor-not-allowed opacity-50'} focus:outline-none`} onClick={() => {
                        handleCopy();
                        toast(
                            <div className="inline-flex items-center gap-2">
                                <IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
                                <p><span className="opacity-50">You copied</span> npm i symbols-{selectedFramework.toLowerCase()} <span className="opacity-50">to clipboard</span></p>
                            </div>
                        );
                    }} disabled={selectedFramework !== 'React' && selectedFramework !== 'Vue'}
                >
                    {`npm i symbols-${selectedFramework.toLowerCase()}`}
                    <span className={`group bg-white/10 rounded-lg p-[6px] flex items-center justify-center w-[26px] h-[26px]`}>
                        {isCopied ? (
                            <IconCheckmark className="fill-white scale-in w-[12px] h-[12px]" />
                        ) : (
                            <IconPaperclip className={`group-hover:fill-white scale-in ${selectedFramework === 'React' ? 'fill-white/50 group-hover:-rotate-[10deg]' : 'fill-white'}`} width={14} height={14} />
                        )}
                    </span>
                </button>
                {selectedFramework !== 'React' && selectedFramework !== 'Vue' && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/30 text-white border border-yellow-500"
                    >
                        Coming Soon
                    </motion.span>
                )}
            </div>
            {/* <button
            className="group inline-flex justify-between gap-4 bg-white/10 border border-white/0 hover:border-white/20 hover:bg-white/20 text-white py-2 pl-4 pr-2 font-mono rounded-xl transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none"
            onClick={handleCopy}
        >
            {`npm i symbols-${selectedFramework.toLowerCase()}`}
            <span className="group bg-white/10 rounded-lg p-[6px]">
                {isCopied ? (
                    <IconCheckmarkCircleFill className=" fill-green-500 " width={14} height={14} />
                ) : (
                    <IconPaperclip className="group-hover:fill-white fill-white/50 group-hover:-rotate-[10deg]" width={14} height={14} />
                )}
            </span>
        </button> */}
        </div>
    );
};

export default NpmButton;