'use client' 

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import * as Icons from 'symbols-react'; 
import { IconProps } from '@/components/IconsList';  
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { IconPaperclip, IconCheckmark } from 'symbols-react';
import { FavoritesButton } from "@/components/FavoritesButton";

interface IconDetailClientProps {
  iconName: string;
}

function IconDetailClient({ iconName }: IconDetailClientProps) {
  const router = useRouter();
  const [size] = useState<number>(228); 
  const [fillColor] = useState<string>("#FFFFFF"); 
  const [copied, setCopied] = useState(false);

  const IconComponent = useMemo(() => {
    if (typeof iconName === 'string' && iconName.startsWith('Icon')) {
      return Icons[iconName as keyof typeof Icons] as React.ComponentType<IconProps>;
    }
    return null;
  }, [iconName]);

  const handleCopy = () => {
    navigator.clipboard.writeText(iconName);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
    toast(
      <div className="inline-flex items-center gap-2">
        <Icons.IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
        <p><span className="opacity-50">You copied</span> {iconName.replace('Icon', '')} <span className="opacity-50">to clipboard</span></p>
      </div>
    );
  };

  if (!iconName) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-foreground p-8">
        <h1 className="text-2xl font-semibold mb-4">Loading Icon...</h1>
        <p>If this persists, the icon name might be missing from the URL.</p>
         <button 
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!IconComponent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900/50 text-foreground p-8">
        <h1 className="text-2xl font-semibold mb-4">Icon Not Found</h1>
        <p>The icon &quot;{iconName}&quot; could not be loaded from the library.</p>
        <button 
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Go Back
        </button>
      </div>
    );
  }

  // const dotPatternStyle = {
  //   backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1.5px)',
  //   backgroundSize: '16px 16px', // Adjust for dot density
  // };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-start bg-zinc-950 pt-12 motion-preset-blur-left-md motion-preset-fade-md motion-scale-in-90 motion-ease-spring-snappy motion-duration-150">
      <div className="w-full max-w-lg">
        <button 
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          Keep Searching
        </button>

        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold break-all">
              {iconName.replace('Icon', '')}
            </h1>
            <p className="text-white/30 mb-8">{iconName}</p>
          </div>
          <div className="flex gap-2">
            <FavoritesButton iconName={iconName} />
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  className="group flex items-center justify-center w-10 h-10 rounded-lg p-0 transition-all duration-150 ease-in-out hover:bg-white/10 hover:scale-95"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <IconCheckmark className="fill-green-500 scale-in w-6 h-6" width={16} height={16} />
                  ) : (
                    <IconPaperclip className="fill-white/50 group-hover:-rotate-[10deg] scale-in w-6 h-6" width={16} height={16} />
                  )}
                </button>
              </TooltipTrigger> 
              <TooltipContent className="bg-gray-800">
                <p className="text-white text-xs">Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>


        <div className="grid md:grid-cols-1 gap-8">
          <div 
            className="flex items-center justify-center p-4 bg-neutral-800/30 rounded-xl shadow-lg aspect-square overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          >
            {IconComponent && (
              <IconComponent 
                width={size} 
                height={size} 
                fill={fillColor} 
                className="transition-all group-hover:scale-110 duration-300" 
              />
            )}
          </div>

          {/* <div className="space-y-6 p-6 bg-neutral-800/20 rounded-xl">
            <div>
              <Label htmlFor="icon-fill" className="text-lg font-medium">Fill Color</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  id="icon-fill"
                  type="color"
                  value={fillColor}
                  onChange={(e) => setFillColor(e.target.value)}
                  className="p-0 h-10 w-10 rounded-md border-0 cursor-pointer"
                />
                <Input
                  type="text"
                  value={fillColor}
                  onChange={(e) => setFillColor(e.target.value)}
                  placeholder="#FFFFFF"
                  className="flex-1"
                />
              </div>
            </div>
          </div> */}
        </div>
        
        {/* <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <div className="bg-neutral-800/30 p-4 rounded-lg text-left">
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                    <code>
{`import { ${iconName} } from 'symbols-react';

<${iconName} width={${size}} height={${size}} fill="${fillColor}" />`}
                    </code>
                </pre>
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default function IconDetailPage() {
  const params = useParams();
  const [clientIconName, setClientIconName] = useState<string | null>(null);

  useEffect(() => {
    if (params && typeof params.iconName === 'string') {
      setClientIconName(params.iconName);
    } else if (params && Array.isArray(params.iconName) && params.iconName.length > 0) {
      setClientIconName(params.iconName[0]);
    } else if (clientIconName === null && params) { 
        setClientIconName(""); 
    }
  }, [params, clientIconName]); 

  if (clientIconName === null) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
            <h1 className="text-2xl font-semibold">Loading icon details...</h1>
        </div>
    );
  }
  
  return <IconDetailClient iconName={clientIconName} />;
} 