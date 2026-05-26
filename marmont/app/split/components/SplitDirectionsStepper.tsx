"use client";

import { useMemo, useState } from "react";
import styles from "../page.module.css";

type Step = {
    title: string;
    description: string;
};

const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Tonciceva+6+Split";

export default function SplitDirectionsStepper() {
    const steps = useMemo<Step[]>(
        () => [
            {
                title: "Step 1",
                description:
                    "Image 1 (bird view): orange pin is your current location; follow the red line to the red star (checkpoint). Image 2: the red star shows where you should end this step and where the next step begins.",
            },
            {
                title: "Step 2",
                description:
                    "Image 1 (bird view): start at the red star (your current checkpoint) and follow the red line to the next red star. Image 2: the red star marks where you should end this step and start step 3.",
            },
            {
                title: "Step 3",
                description:
                    "Image 1 (bird view): begin at the red star from step 2 and follow the red line to the next red star. Image 2: the red star is your end point for this step and the start of step 4.",
            },
            {
                title: "Step 4",
                description:
                    "Image 1 (bird view): start at the red star from step 3 and follow the red arrows to the black circle. Image 2: the black circle marks the final destination at Tonciceva 6, Split.",
            },
        ],
        []
    );

    const [stepIndex, setStepIndex] = useState(0);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const currentStep = steps[stepIndex];
    const stepNumber = stepIndex + 1;

    return (
        <>
            <div className={styles.directionsText}>
                <div className={styles.stepperHeader}>
                    <div>
                        <strong>{currentStep.title}</strong>
                        <p>{currentStep.description}</p>
                    </div>
                    <span className={styles.stepIndicator}>
                        Step {stepNumber} of {steps.length}
                    </span>
                </div>

                <div className={styles.stepperButtons}>
                    <button
                        type="button"
                        className={styles.stepperButton}
                        onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
                        disabled={stepIndex === 0}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        className={`${styles.stepperButton} ${styles.stepperButtonPrimary}`}
                        onClick={() =>
                            setStepIndex((prev) => Math.min(steps.length - 1, prev + 1))
                        }
                        disabled={stepIndex === steps.length - 1}
                    >
                        Next
                    </button>
                    <a className={styles.directionsLink} href={MAPS_URL} target="_blank" rel="noreferrer">
                        Open in Google Maps
                    </a>
                </div>
            </div>

            <div className={styles.directionsImages}>
                <button
                    type="button"
                    className={styles.directionsImageButton}
                    onClick={() => setLightboxSrc(`/images/split/direction/step${stepNumber}.webp`)}
                    aria-label={`Open current location step ${stepNumber} image`}
                >
                    <div className={styles.directionsImageCard}>
                        <img
                            src={`/images/split/direction/step${stepNumber}.webp`}
                            alt={`Current location step ${stepNumber}`}
                        />
                        <span className={styles.directionsCaption}>Bird-view route: follow the red line to the star.</span>
                    </div>
                </button>
                <button
                    type="button"
                    className={styles.directionsImageButton}
                    onClick={() => setLightboxSrc(`/images/split/direction/locationGoalStep${stepNumber}.webp`)}
                    aria-label={`Open goal location step ${stepNumber} image`}
                >
                    <div className={styles.directionsImageCard}>
                        <img
                            src={`/images/split/direction/locationGoalStep${stepNumber}.webp`}
                            alt={`Goal location step ${stepNumber}`}
                        />
                        <span className={styles.directionsCaption}>Destination: the red star is your checkpoint.</span>
                    </div>
                </button>
            </div>

            {lightboxSrc && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setLightboxSrc(null)}
                >
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        onClick={(event) => {
                            event.stopPropagation();
                            setLightboxSrc(null);
                        }}
                        aria-label="Close image"
                    >
                        Close
                    </button>
                    <img
                        className={styles.lightboxImage}
                        src={lightboxSrc}
                        alt="Expanded step view"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
