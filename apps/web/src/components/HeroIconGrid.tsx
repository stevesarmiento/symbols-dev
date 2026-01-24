import React, { useState, useEffect } from 'react';
import {
    IconSquareStack3dDownForwardFill,
    IconAppleTerminal,
    IconApplescriptFill,
    IconAppclip,
    IconAppGiftFill,
    IconPersonAndBackgroundDotted,
    IconSparkles,
    IconAmplifier,
    IconLampDeskFill,
    IconBackpackFill,
    IconCameraAperture,
    IconCameraFilters,
    IconBicycle,
    IconCloudRainFill,
    IconCommand,
    IconCreditcardFill,
    IconCrownFill,
    IconCupAndSaucer,
    IconDialHighFill,
    IconDogFill,
    IconFaceid,
    IconCartFillBadgePlus,
    IconCircleRectangleFilledPatternDiagonalline,
    IconFerry,
    IconHandRaisedFill,
    IconPersonCropCircleDashed,
    IconPlusSquareFillOnSquareFill,
    IconRectangleStackFillBadgePlus,
    IconRoadLanesCurvedRight,
    IconRotate3dFill,
    IconShareplay,
    IconShowerFill,
    IconShoeprintsFill,
    IconSquareAndArrowUpOnSquare,
    IconSquareFilledOnSquare,
    IconSuitClubFill,
    IconStroller,
    IconSunMax,
    IconSquareResizeUp,
    IconTaillightFog,
    IconTeddybear,
    IconWifiSlash,
    IconZzz,
    IconXboxLogo,
    IconWrenchAdjustableFill,
    IconWindSnow,
    IconVolleyball,
    IconTshirtFill,

} from 'symbols-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialIcons = [
    { key: 'IconSquareStack3dDownForwardFill', icon: <IconSquareStack3dDownForwardFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconAppleTerminal', icon: <IconAppleTerminal className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconApplescriptFill', icon: <IconApplescriptFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconAppclip', icon: <IconAppclip className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconAppGiftFill', icon: <IconAppGiftFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconPersonAndBackgroundDotted', icon: <IconPersonAndBackgroundDotted className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconSparkles', icon: <IconSparkles className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconAmplifier', icon: <IconAmplifier className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconLampDeskFill', icon: <IconLampDeskFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconBackpackFill', icon: <IconBackpackFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCameraAperture', icon: <IconCameraAperture className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCameraFilters', icon: <IconCameraFilters className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconBicycle', icon: <IconBicycle className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCloudRainFill', icon: <IconCloudRainFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCommand', icon: <IconCommand className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCreditcardFill', icon: <IconCreditcardFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCrownFill', icon: <IconCrownFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCupAndSaucer', icon: <IconCupAndSaucer className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconDialHighFill', icon: <IconDialHighFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconDogFill', icon: <IconDogFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconFaceid', icon: <IconFaceid className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCartFillBadgePlus', icon: <IconCartFillBadgePlus className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconCircleRectangleFilledPatternDiagonalline', icon: <IconCircleRectangleFilledPatternDiagonalline className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconFerry', icon: <IconFerry className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconHandRaisedFill', icon: <IconHandRaisedFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> }
];

const newIcons = [
    { key: 'IconPersonCropCircleDashed', icon: <IconPersonCropCircleDashed className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconPlusSquareFillOnSquareFill', icon: <IconPlusSquareFillOnSquareFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconRectangleStackFillBadgePlus', icon: <IconRectangleStackFillBadgePlus className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconRoadLanesCurvedRight', icon: <IconRoadLanesCurvedRight className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconRotate3dFill', icon: <IconRotate3dFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconShareplay', icon: <IconShareplay className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconShowerFill', icon: <IconShowerFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconShoeprintsFill', icon: <IconShoeprintsFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconSquareAndArrowUpOnSquare', icon: <IconSquareAndArrowUpOnSquare className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconSquareFilledOnSquare', icon: <IconSquareFilledOnSquare className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconSuitClubFill', icon: <IconSuitClubFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconStroller', icon: <IconStroller className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconSunMax', icon: <IconSunMax className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconSquareResizeUp', icon: <IconSquareResizeUp className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconTaillightFog', icon: <IconTaillightFog className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconTeddybear', icon: <IconTeddybear className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconWifiSlash', icon: <IconWifiSlash className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconZzz', icon: <IconZzz className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconXboxLogo', icon: <IconXboxLogo className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconWrenchAdjustableFill', icon: <IconWrenchAdjustableFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconWindSnow', icon: <IconWindSnow className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconVolleyball', icon: <IconVolleyball className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> },
    { key: 'IconTshirtFill', icon: <IconTshirtFill className="w-[24px] h-[24px] fill-white hover:scale-125 transition-all duration-150 ease-in-out" /> }
];

const IconsGrid = () => {
    const [iconKey] = useState(Math.random());
    const [emptyIcons, setEmptyIcons] = useState([...initialIcons.slice(0, 25)]);
    const [newIconIndex, setNewIconIndex] = useState(0);

    const iconAnimation = {
        initial: { rotate: -360, opacity: 0 },
        animate: { rotate: 0, opacity: 1 },
        exit: { rotate: 360, opacity: 0 },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (newIconIndex >= newIcons.length) {
                setEmptyIcons([...initialIcons.slice(0, 25)]);
                setNewIconIndex(0);
                return;
            }

            const newEmptyIcons = [...emptyIcons];
            const randomIndex = Math.floor(Math.random() * newEmptyIcons.length);
            const newIcon = newIcons[newIconIndex];
            newEmptyIcons[randomIndex] = newIcon;
            setEmptyIcons(newEmptyIcons);
            setNewIconIndex(newIconIndex + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [emptyIcons, newIconIndex]);

    return (
        <div
            className="grid  grid-cols-5 gap-4 bg-white/5 backdrop-blur-fallback border border-white/5 p-[12px] rounded-[25px] shadow-2xl shadow-black/70 w-96 ml-12 mt-12 sm:m-0"
        >
            {emptyIcons.map(({ key, icon }, index) => (
                <div key={key} className="flex cursor-crosshair justify-center items-center bg-white/5 w-[55px] h-[55px] backdrop-blur-fallback border border-white/10 p-[13px] rounded-[15px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={`${iconKey}-${index}`}
                            variants={iconAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                rotate: { type: "spring", stiffness: 60, duration: 0.5 },
                                opacity: { duration: 0.3 }
                            }}
                        >
                            {icon}
                        </motion.div>
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default IconsGrid;