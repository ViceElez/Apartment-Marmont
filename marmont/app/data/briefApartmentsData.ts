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
    bookingUrl: string;
    accent: string;
    rooms: Room[];
}

export const apartments: Apartment[] = [
    {
        id: "apt-1",
        label: "No. 01",
        title: "Apartment Marmont",
        location: "Split, Croatia",
        price: "€200",
        per: "/ night",
        tag: "Sea View Suite",
        desc: "Set in the heart of Split, steps from the waterfront. A calm, light-filled base for morning walks, old-town evenings, and easy beach days.",
        cta: "Reserve Suite",
        bookingUrl: "https://hr.airbnb.com/rooms/10186174?source_impression_id=p3_1779463369_P3oAHkNFOHK_HY9O",
        accent: "#C9A96E",
        rooms: [
            { label: "Living Room", img: "/images/split/general/soba_kroz_vrata.jpg", note: "Open-plan with panoramic sea views" },
            { label: "Bedroom", img: "/images/split/general/marmont_teraca1.jpg", note: "King bed, linen drapes, private terrace" },
            { label: "Kitchen", img: "/images/split/livingRoom/livingRoom1.jpg", note: "Fully equipped, stone countertops" },
        ],
    },
    {
        id: "apt-2",
        label: "No. 02",
        title: "Apartment Solta",
        location: "Stomorska, Solta, Croatia",
        price: "€100",
        per: "/ night",
        tag: "Clifftop Residence",
        desc: "Perched above Stomorska bay, with a slower island rhythm. A quiet retreat for sea swims, sunset dinners, and long, unhurried afternoons.",
        cta: "Reserve Suite",
        bookingUrl: "https://www.airbnb.com/rooms/11817985?search_mode=regular_search&adults=1&check_in=2026-06-01&check_out=2026-06-06&children=0&infants=0&pets=0&photo_id=1746179446&source_impression_id=p3_1779463646_P32iXIwD-WkG0io1&previous_page_section_name=1000&federated_search_id=4f3f34a8-1c6a-4ea1-89e0-0fa79fb03fc8",
        accent: "#8BAAB5",
        rooms: [
            { label: "Living Room", img: "/images/solta/general/Stomorska23.JPG", note: "Vaulted ceilings, designer furnishings" },
            { label: "Master Suite", img: "/images/solta/general/house_outside_novo.JPG", note: "Ensuite marble bath, infinity views" },
            { label: "Terrace", img: "/images/solta/bedroom/Stomorska28.JPG", note: "Outdoor dining, plunge pool" },
        ],
    },
];