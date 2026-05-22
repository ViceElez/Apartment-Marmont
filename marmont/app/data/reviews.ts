export interface ReviewItem {
    id: number;
    title: string;
    quote: string;
    name: string;
    rating: number;
}

export interface ReviewStat {
    value: string;
    label: string;
}

export const reviews: ReviewItem[] = [
    {
        id: 1,
        title: "(01)",
        quote: "We had a great stay at Anela and Neven’s apartment, and the location was perfect for sightseeing and nightlife. The thoughtful touches like toiletries, beach towels, and kitchen essentials made everything easy.",
        name: "Radmila",
        rating: 5,
    },
    {
        id: 2,
        title: "(02)",
        quote: "The place was spotless, and the airport pickup/drop-off arrangement was very convenient. The location is unbeatable—close to the marina, bus station, and the beautiful city center.",
        name: "Shawna",
        rating: 5,
    },
    {
        id: 3,
        title: "(03)",
        quote: "The apartment was beautiful and exactly as described, with a true local feel right in the heart of Split. It can be lively at night, but closing the windows helped, and their restaurant/bar tips were excellent.",
        name: "Alexandra",
        rating: 5,
    },
    {
        id: 4,
        title: "(04)",
        quote: "The top-floor balcony views are incredible, and the flat is quiet, comfortable, and well appointed. Anela, Neven, and Tony are warm, wonderful hosts—we’d happily return.",
        name: "James & Nora",
        rating: 5,
    },
];

export const reviewStats: ReviewStat[] = [
    { value: "1200+", label: "Reviews" },
    { value: "10,000+", label: "Happy Clients" },
];