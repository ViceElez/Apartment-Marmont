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
        quote: "An unforgettable experience. The apartment was peaceful and every detail felt thoughtful. From check-in to the last evening walk, everything was seamless.",
        name: "Sophia & Daniel",
        rating: 5,
    },
    {
        id: 2,
        title: "(02)",
        quote: "We celebrated our anniversary here and it was magical. The space was spotless, the location was perfect, and the host made everything effortless.",
        name: "Liam & Emily",
        rating: 5,
    },
    {
        id: 3,
        title: "(03)",
        quote: "Arrived exhausted, left completely renewed. The light in the mornings, the quiet evenings, the little handwritten note on arrival — it all added up to something rare.",
        name: "Marco & Claire",
        rating: 5,
    },
    {
        id: 4,
        title: "(04)",
        quote: "Everything about it was considered. The linen, the coffee, the view from the terrace. We kept saying we'd leave and then finding one more reason to stay.",
        name: "James & Nora",
        rating: 5,
    },
];

export const reviewStats: ReviewStat[] = [
    { value: "1200+", label: "Reviews" },
    { value: "10,000+", label: "Happy Clients" },
];