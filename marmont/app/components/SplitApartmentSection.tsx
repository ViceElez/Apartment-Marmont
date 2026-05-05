"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";
import styles from "./styles/SplitApratment.module.css";

export default function SplitApartmentSection() {
    const ref = useRef(null);

    const { scrollYProgress: bgScrollProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: textScrollProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(bgScrollProgress, [0, 1], ["0%", "100%"]);

    const rawTextY = useTransform(textScrollProgress, [0, 1], ["0vh", "70vh"]);
    const textY = useSpring(rawTextY, { stiffness: 200, damping: 30 });

    return (
        <div ref={ref} className={styles.container}>
            <motion.div
                className={styles.backgroundLayer}
                style={{
                    backgroundImage: `url(/images/split/SplitCity.webp)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />

            <motion.h1
                style={{ y: textY }}
                className={styles.title}
            >
                Apartment Marmont
            </motion.h1>

            <div
                className={styles.foregroundLayer}
                style={{
                    backgroundImage: `url(/images/split/SplitBuildings.PNG)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
}