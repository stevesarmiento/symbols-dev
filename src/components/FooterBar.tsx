import React, { useState, useEffect } from 'react';
import { IconHeartFill, IconCupAndSaucerFill } from 'symbols-react';

const FooterBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed bottom-0 h-[100px] px-4 sm:px-0 -mb-[36px] left-0 right-0 bg-white/5 border border-white/5 backdrop-blur-fallback text-white pt-[10px] ${isVisible ? 'footer-visible' : 'footer-hidden'}`}>
                <div className="max-w-7xl flex justify-between align-middle items-center mx-auto">
                    <div className="text-white/60">
                        Made with <IconHeartFill className="inline fill-red-400" /> by <a href="https://x.com/stevensarmi_" className="text-white hover:text-blue-500 transition-all duration-150 ease-in-out"> @stevensarmi_</a>
                    </div>
                    <div className="inline-flex gap-4">
                        <button
                            className="group inline-flex justify-center items-center text-white/70 hover:text-white/90 font-bold py-2 px-4 rounded-full transition-all duration-150 ease-in-out hover:scale-105"
                            onClick={() => window.open('https://buy.stripe.com/5kA183efeaUb8kU9AC', '_blank')}
                        >
                            <IconCupAndSaucerFill width={18} height={18} className="inline fill-white/40 group-hover:fill-white/80 mr-2 transition-all duration-150 ease-in-out group-hover:-rotate-[10deg]" />
                            <span className="text-sm sm:text-base">Buy Dev a Coffee</span>
                        </button>
                        <button
                            className="group inline-flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white/70 hover:text-white/90 font-bold py-2 px-4 rounded-full transition-all duration-150 ease-in-out hover:scale-105"
                            onClick={() => window.open('https://buy.stripe.com/3cseYT4EE4vNdFe289', '_blank')}
                        >
                            <IconHeartFill width={18} height={18} className="inline fill-white/40 group-hover:fill-red-400 mr-2 transition-all duration-150 ease-in-out group-hover:-rotate-[10deg]" />
                            <span className="text-sm sm:text-base">Support Symbols</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterBar;