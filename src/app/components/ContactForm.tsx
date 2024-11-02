"use client";

import MotionDiv from "./MotionDiv";
import { slideInFromRight } from "../utils/motion";
import { Send } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    function handleButtonClick() {
        window.location.href = "mailto:evan.huang000@proton.me";
    }

    return (
        <MotionDiv
            variants={slideInFromRight(1.4)}
            initial="hidden"
            animate="visible"
            className="lg:pl-6 w-full"
        >
            <section className="w-full text-sm" id="contact">
                <SectionLabel label="CONTACT" />
                <div className="col-span-2 flex justify-start">
                    <Button
                        onClick={handleButtonClick}
                        className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 dark:text-white text-xs px-4 py-2 rounded-sm w-full"
                    >
                        SEND MESSAGE
                        <Send className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </section>
        </MotionDiv>
    );
}
