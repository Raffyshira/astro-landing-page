import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PropsAnimateReveal {
    children: React.ReactNode;
    direction?: "x" | "y";
    initialPos?: number;
}

interface PropsHeroAnimate extends PropsAnimateReveal {
    delayNum?: number;
}

export const AnimateReveal = ({
    children,
    direction = "x",
    initialPos = -200
}: PropsAnimateReveal) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const initialPosition = direction === "x" ? { x: initialPos } : { y: 50 };
    const animatePosition =
        direction === "x"
            ? { x: isInView ? 0 : initialPos }
            : { y: isInView ? 0 : 50 };
    return (
        <>
            <motion.div
                ref={ref}
                initial={{ ...initialPosition, opacity: 0 }}
                animate={{
                    ...animatePosition,
                    opacity: isInView ? 1 : 0
                }}
                transition={{
                    duration: 0.75,
                    ease: [0.17, 0.55, 0.55, 1]
                }}
                layout
            >
                {children}
            </motion.div>
        </>
    );
};

export const HeroAnimate = ({ children, delayNum }: PropsHeroAnimate) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <div className="hero-section" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 50
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 10,
                        delay: delayNum
                    }}
                    layout
                >
                    {children}
                </motion.div>
            </div>
        </>
    );
};
