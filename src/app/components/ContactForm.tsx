"use client";

import MotionDiv from "./MotionDiv";
import { slideInFromRight } from "../utils/motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import SectionLabel from "./SectionLabel";

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        defaultValues: {
            message: "",
        },
    });

    function onSubmit(values) {
        setIsLoading(true);
        const mailtoLink = `mailto:evan.huang000@proton.me?subject=Message from Contact Form&body=${encodeURIComponent(values.message)}`;
        window.location.href = mailtoLink;
        setIsLoading(false);
        form.reset();
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
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="grid grid-cols-2 gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel className="text-slate-100 text-xs">
                                        Message
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="I would like to request a quote for a website design..."
                                            {...field}
                                            className="bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.1)] text-white text-xs p-2 rounded-sm focus:ring-orange-500 w-full"
                                            rows={4}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <div className="col-span-2 flex justify-start">
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 dark:text-white text-xs px-4 py-2 rounded-sm w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? "SENDING..." : "SEND MESSAGE"}
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </Form>
            </section>
        </MotionDiv>
    );
}
