"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "../config";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import MotionDiv from "./MotionDiv";

const gradients = [
    "radial-gradient(transparent, transparent, #A07CFE, #FE8FB5, #FFBE7B, transparent, transparent)",
    "radial-gradient(transparent, transparent, #FE8FB5, #FFBE7B, #A07CFE, transparent, transparent)",
    "radial-gradient(transparent, transparent, #FFBE7B, #A07CFE, #FE8FB5, transparent, transparent)",
];

const email = siteConfig.socialLinks.find((link) =>
    link.url.includes("mailto")
)?.url;

type TProps = {
    isSticky?: boolean;
};

export default function HireMeButton({ isSticky }: TProps) {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }
    
    return (
        <MotionDiv
            variants={isMobile ? slideInFromTop(1) : slideInFromLeft(1)}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start lg:py-6"
        >
            <Link
                href={"#contact"}
                className={`${!isSticky && 'lg:hidden'} `}
            >
                <div className="relative w-28 h-9 lg:w-32 lg:h-10 overflow-hidden p-[1px] rounded-sm hover:scale-110 transition-all duration-300 ease-in-out">
                    <motion.div
                        animate={{
                            background: gradients,
                            rotate: [0, 360],
                        }}
                        transition={{
                            background: {
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            rotate: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                        className="flex justify-center items-center absolute inset-0 w-full h-full blur-sm"
                    ></motion.div>
                    <button
                        className="text-white text-[10px] lg:text-[11px] border border-[rgba(255,255,255,0.3)] font-bold tracking-widest bg-background
             px-4 py-2 rounded-md w-full h-full relative z-10"
                    >
                        CONTACT
                    </button>
                </div>
            </Link>
        </MotionDiv>
    );
}
