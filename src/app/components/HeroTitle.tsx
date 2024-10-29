"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import Image from "next/image";

export default function HeroTitle() {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }

    return (
        <div>
            <motion.div
                variants={isMobile ? slideInFromTop(0.5) : slideInFromLeft(0.5)}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-xl md:text-2xl font-medium flex items-center w-full justify-center lg:justify-start"
            >
                <Image
                    src="/logox.png"
                    alt="Alvin Chang Portfolio Logo"
                    className="w-7 h-7 mr-1 rounded-md"
                    width={28}
                    height={28}
                />
                <h1>Hi, I'm Evan! 👋</h1>
            </motion.div>
            <motion.h1
                variants={isMobile ? slideInFromTop(0.6) : slideInFromLeft(0.6)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-center lg:text-start"
            >
                I'm a
                <span className="gradient-accent"> Front-End  </span>

            </motion.h1>
            <motion.h1
                variants={isMobile ? slideInFromTop(0.7) : slideInFromLeft(0.7)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-center lg:text-start mb-2"
            >
                Developer
            </motion.h1>
        </div>
    );
}
