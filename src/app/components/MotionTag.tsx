"use client";

import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

type MotionTags = keyof typeof motion;

interface TProps extends HTMLMotionProps<any> {
    tag: MotionTags;
    children: React.ReactNode;
    variants: any;
    initial: any;
    animate: any;
    className?: string;
    once?: boolean;
    transition?: any;
}

export default function MotionTag({
    tag,
    children,
    variants,
    initial,
    animate,
    className,
    once = true,
    transition = { duration: 0.3 },
    ...props
}: TProps) {
    const isMobile = useIsMobile();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        margin: "-150px",
    });

    return (
        <>
            {tag === "div" ? (
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial={!isMobile ? initial : "visible"}
                    animate={isInView ? animate : initial}
                    transition={transition}
                    className={className}
                >
                    {children}
                </motion.div>
            ) : (
                <motion.h1
                    ref={ref}
                    variants={variants}
                    initial={!isMobile ? initial : "visible"}
                    animate={isInView ? animate : initial}
                    transition={transition}
                    className={className}
                >
                    {children}
                </motion.h1>
            )}
        </>
    );
}

// ref={ref}
// variants={variants}
// initial={initial}
// animate={isInView ? animate : initial}
// transition={transition}
// className={className}
// viewport={{ once }}
