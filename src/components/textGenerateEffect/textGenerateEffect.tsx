"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
    words,
    filter = true,
    duration = 1,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="max-w-[350px] sm:max-w-[550px]">
                {wordsArray.map((word, idx) => {
                    const indexOfStation = word.indexOf("Station");
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-[48px] font-semibold tracking-[1px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: duration,
                                delay: idx * 1.2,
                            }}
                            style={{
                                filter: filter ? "blur(5px)" : "none",
                            }}
                        >
                            {indexOfStation !== -1 ? (
                                <>
                                    {word.slice(0, indexOfStation)}
                                    <span className="text-[#2948F6]">Station</span>
                                </>
                            ) : (
                                word
                            )}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return renderWords();
};
