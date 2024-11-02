"use client";

import Link from "next/link";
import { siteConfig } from "../config";
import { useState, useEffect, useRef } from "react";
import { slideInFromLeft } from "../utils/motion";
import MotionTag from "./MotionTag";

export default function TableOfContents() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isManualScroll, setIsManualScroll] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (!isManualScroll) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }
        };

        siteConfig.sections.tableOfContents.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                const observer = new IntersectionObserver(observerCallback, {
                    threshold: 0.5,
                });
                observer.observe(element);
                observers.push(observer);
            }
        });

        const handleScroll = () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                setIsManualScroll(false);
            }, 100); // Adjust this value if needed
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observers.forEach((observer) => observer.disconnect());
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [isManualScroll]);

    const handleLinkClick = (sectionId: string) => {
        setIsManualScroll(true);
        setActiveSection(sectionId);
    };

    return (
        <MotionTag
            tag="div"
            variants={slideInFromLeft(0.9)}
            initial="hidden"
            animate="visible"
            className="w-full hidden lg:block"
        >
            {siteConfig.sections.tableOfContents.map((section, index) => (
                <div key={index} className="flex items-center mb-4">
                    <Link
                        href={`#${section.id}`}
                        onClick={() => handleLinkClick(section.id)}
                        className={`flex items-center gap-2 group ${
                            activeSection === section.id ? "active" : ""
                        }`}
                    >
                        <hr
                            className={`w-8 h-[1px] transition-all duration-300 ${
                                activeSection === section.id
                                    ? "!w-16 bg-slate-100"
                                    : "bg-slate-350 group-hover:w-16"
                            }`}
                        />
                        <span
                            className={`transition-all duration-300 text-[10px] tracking-widest ${
                                activeSection === section.id
                                    ? "text-slate-100 font-semibold"
                                    : "text-slate-350 group-hover:text-slate-100"
                            }`}
                        >
                            {section.label}
                        </span>
                    </Link>
                </div>
            ))}
        </MotionTag>
    );
}
