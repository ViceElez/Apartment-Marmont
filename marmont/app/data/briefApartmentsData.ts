interface Room {
    label: string;
    note: string;
    img?: string;
    color?: string;
}

interface Apartment {
    id: string;
    label: string;
    title: string;
    location: string;
    price: string;
    per: string;
    tag: string;
    desc: string;
    cta: string;
    accent: string;
    rooms: Room[];
}

export const apartments: Apartment[] = [
    {
        id: "apt-1",
        label: "No. 01",
        title: "The Meridian",
        location: "Dubrovnik Old Town, Croatia",
        price: "€320",
        per: "/ night",
        tag: "Sea View Suite",
        desc: "Perched above the Adriatic, whitewashed walls meet hand-laid stone floors. A place where mornings begin with salt air and silence.",
        cta: "Reserve Suite",
        accent: "#C9A96E",
        rooms: [
            { label: "Living Room", img: "/images/split/livingRoom1.webp", note: "Open-plan with panoramic sea views" },
            { label: "Bedroom", img: "/images/split/livingRoom1.webp", note: "King bed, linen drapes, private terrace" },
            { label: "Kitchen", img: "/images/split/livingRoom1.webp", note: "Fully equipped, stone countertops" },
        ],
    },
    {
        id: "apt-2",
        label: "No. 02",
        title: "The Vantage",
        location: "Hvar Island, Croatia",
        price: "€480",
        per: "/ night",
        tag: "Clifftop Residence",
        desc: "Raw concrete softened by linen, leather, and lavender. A clifftop retreat designed for those who move slowly through the world.",
        cta: "Reserve Suite",
        accent: "#8BAAB5",
        rooms: [
            { label: "Living Room", img: "/images/split/livingRoom2.webp", note: "Vaulted ceilings, designer furnishings" },
            { label: "Master Suite", img: "/images/split/livingRoom1.webp", note: "Ensuite marble bath, infinity views" },
            { label: "Terrace", img: "/images/split/livingRoom1.webp", note: "Outdoor dining, plunge pool" },
        ],
    },
];