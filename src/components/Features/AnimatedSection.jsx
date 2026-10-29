
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({
    id,
    className = "",
    children,
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.section
            id={id}
            className={className}
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 35 }
            }
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.section>
    );
}
