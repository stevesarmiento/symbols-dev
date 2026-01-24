import Image from 'next/image';
import { IconPartyPopperFill } from 'symbols-react';
import { motion } from 'framer-motion';
import HeroIconGrid from './HeroIconGrid';
import NpmButton from './NpmButton';


const HeroSection = () => {

    return (
        <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.1 }}
            className="flex justify-between items-center py-12 px-8 sm:max-w-7xl m-auto flex-col sm:flex-row overflow-hidden">
            <div
                className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold relative text-white">
                    <span className="crossed-out relative">SF</span> Symbols for the web
                </h1>
                <p className="text-xl md:text-2xl text-white/50">5000+ icons just waiting to be used in your next web app.</p>

                <NpmButton selectedFramework="react" />
            </div>
            <div className="w-1/2">
                <div className="w-[100%] mt-[120px] sm:mt-0 mb-20 sm:mb-0 rounded-lg flex items-center justify-center translate-x-[200px] md:translate-x-[250px] lg:translate-x-[200px] xl:translate-x-[150px]">
                    <Image className="z-0" src="/images/sf-bg.svg" alt="SF Background" width={1374} height={879} draggable={false} />
                    <div className="absolute">
                        <IconPartyPopperFill className="z-50 fill-white translate-x-[15px]" width={150} height={150} />
                    </div>
                    <div className="absolute translate-x-[-220px] translate-y-[0px]">
                        <HeroIconGrid />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;