"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";
import styles from "./styles/SplitApratment.module.css";

export default function SplitApartmentSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // "start end" means animation starts when top of section hits bottom of screen
        // "end start" means animation ends when bottom of section hits top of screen
        offset: ["start end", "end start"],
    });

    // Subtler Parallax: Only move 20% instead of 100% to keep it grounded
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Fades the section in as it scrolls into view
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Scale effect to make it feel like the camera is moving in
    const scale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);

    return (
        <motion.div
            ref={ref}
            className={styles.container}
            style={{ opacity }} // Section fades in smoothly
        >
            <motion.div
                className={styles.backgroundLayer}
                style={{
                    backgroundImage: `url(/images/split/SplitCity.webp)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    y: backgroundY,
                    scale: scale, // Zooms out slightly as you scroll down
                }}
            />
            {/* ... rest of your code */}
        </motion.div>
    );
}