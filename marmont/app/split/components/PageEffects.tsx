"use client";

import { useEffect } from "react";
import baseStyles from "./style/SplitBase.module.css";

export default function PageEffects() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(`.${baseStyles.fadeUp}`));

        elements.forEach((el) => {
            el.style.animationPlayState = "paused";
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.animationPlayState = "running";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
