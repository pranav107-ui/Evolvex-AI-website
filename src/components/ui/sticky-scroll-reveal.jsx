"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--slate-900)",
        "var(--black)",
        "var(--neutral-900)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            className="relative flex h-[850px] overflow-y-auto rounded-md no-scrollbar w-full max-w-[1200px] mx-auto justify-between px-4 lg:px-10"
            ref={ref}
        >
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            <div className="relative flex flex-col items-start px-4 pt-10 pb-[600px] w-full max-w-[500px]">
                {content.map((item, index) => (
                    <div key={item.title + index} className="mb-80 mt-20">
                        <motion.h2
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-[24px] font-bold text-[#1a1a1a] mb-6"
                        >
                            {item.title}
                        </motion.h2>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-[16px] leading-[1.6] text-slate-600"
                        >
                            {item.description}
                        </motion.div>
                    </div>
                ))}
            </div>
            <div
                className={cn(
                    "sticky top-60 hidden w-[520px] h-[450px] overflow-hidden rounded-md bg-white lg:block",
                    contentClassName,
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
