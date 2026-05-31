"use client";

import { useState } from "react";
import { activities } from "../../data/split/activities";
import { beaches } from "../../data/split/beaches";
import { nightlife } from "../../data/split/nightlife";
import { restaurants } from "../../data/split/restaurants";
import { shopping } from "../../data/split/shopping";
import { topSights } from "../../data/split/topSights";
import baseStyles from "./style/SplitBase.module.css";
import styles from "./style/ExploreSection.module.css";

const joinParts = (parts: Array<string | undefined>) => parts.filter(Boolean).join(" · ");

type ExploreCard = {
    id: string;
    title: string;
    description: string;
    meta: string;
    icon: string;
};

const exploreTabs: Array<{ id: string; label: string; icon: string; cards: ExploreCard[] }> = [
    {
        id: "beaches",
        label: "Beaches",
        icon: "🏖",
        cards: beaches.map((beach) => ({
            id: beach.id,
            title: beach.name,
            description: joinParts([beach.beachType, ...beach.features]),
            meta: joinParts([beach.distanceFromApartment, beach.address]),
            icon: beach.icon,
        })),
    },
    {
        id: "restaurants",
        label: "Restaurants",
        icon: "🍽",
        cards: restaurants.map((restaurant) => ({
            id: restaurant.id,
            title: restaurant.name,
            description: joinParts([restaurant.cuisine, restaurant.address, restaurant.notes]),
            meta: joinParts([restaurant.distanceFromApartment, restaurant.hours]),
            icon: restaurant.icon,
        })),
    },
    {
        id: "nightlife",
        label: "Nightlife",
        icon: "🍸",
        cards: nightlife.map((venue) => ({
            id: venue.id,
            title: venue.name,
            description: joinParts([venue.type, venue.musicGenre, venue.notes]),
            meta: joinParts([venue.distanceFromApartment, venue.hours]),
            icon: venue.icon,
        })),
    },
    {
        id: "sights",
        label: "Top Sights",
        icon: "🏛",
        cards: topSights.map((sight) => ({
            id: sight.id,
            title: sight.name,
            description: joinParts([sight.type, sight.address, sight.notes]),
            meta: joinParts([sight.distanceFromApartment, sight.hours]),
            icon: sight.icon,
        })),
    },
    {
        id: "activities",
        label: "Activities",
        icon: "🚵",
        cards: activities.map((activity) => ({
            id: activity.id,
            title: activity.name,
            description: joinParts([activity.type, activity.address]),
            meta: joinParts([activity.distanceFromApartment, activity.hours]),
            icon: activity.icon,
        })),
    },
    {
        id: "shopping",
        label: "Shopping",
        icon: "🛍",
        cards: shopping.map((shop) => ({
            id: shop.id,
            title: shop.name,
            description: joinParts([shop.type, shop.category, shop.address, shop.notes]),
            meta: joinParts([shop.distanceFromApartment, shop.hours]),
            icon: shop.icon,
        })),
    },
];

export default function ExploreSection() {
    const [activeTab, setActiveTab] = useState("beaches");

    return (
        <section className={baseStyles.section} id="explore" style={{ background: "var(--mid)" }}>
            <div className={baseStyles.container}>
                <div className={`${baseStyles.sectionHeader} ${baseStyles.fadeUp}`}>
                    <p className={baseStyles.label}>Local Guide</p>
                    <h2>Discover Split<br /><em>like a local</em></h2>
                    <div className={baseStyles.divider}></div>
                </div>

                <div className={styles.exploreTabs}>
                    {exploreTabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`${styles.exploreTab} ${activeTab === tab.id ? styles.active : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {exploreTabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${styles.explorePanel} ${activeTab === tab.id ? styles.active : ""}`}
                        id={`exp-${tab.id}`}
                    >
                        <div className={styles.exploreCards}>
                            {tab.cards.map((card) => (
                                <div key={card.id} className={styles.exploreCard}>
                                    <div className={styles.exploreCardImg}>
                                        <div className={styles.exploreCardImgPlaceholder}>
                                            <span className={styles.exploreCardIcon}>{card.icon}</span>
                                            {card.title}
                                        </div>
                                    </div>
                                    <div className={styles.exploreCardBody}>
                                        <h4>{card.title}</h4>
                                        <p>{card.description}</p>
                                        <div className={styles.exploreCardMeta}>{card.meta}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
