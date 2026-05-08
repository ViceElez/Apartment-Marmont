export interface TourActivity {
    id: string;
    name: string;
    type: string;
    distanceFromApartment: string;
    address: string;
    hours: string;
    bookingLink: string;
    icon: string;
}

// Single export array for activities
export const activities: TourActivity[] = [
    {
        id: "cetina-rafting",
        name: "River Cetina – Rafting",
        type: "Rafting",
        distanceFromApartment: "550m",
        address: "Obala Lazareta 3, 21000, Split",
        hours: "Mon-Sun: 08-21:30",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "cetina-extreme-rafting",
        name: "River Cetina – Extreme rafting",
        type: "Extreme Rafting",
        distanceFromApartment: "550m",
        address: "Obala Lazareta 3, 21000, Split",
        hours: "Mon-Sun: 08-21:30",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "krka-national-park",
        name: "Krka – National park",
        type: "National Park Tour",
        distanceFromApartment: "550m",
        address: "Obala Lazareta 3, 21000, Split",
        hours: "Mon-Sun: 08-21:30",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "cetina-canyoning",
        name: "River Cetina – Canyoning",
        type: "Canyoning",
        distanceFromApartment: "550m",
        address: "Obala Lazareta 3, 21000, Split",
        hours: "Mon-Sun: 08-21:30",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "sea-kayaking-split",
        name: "Sea Kayaking - Split",
        type: "Kayaking",
        distanceFromApartment: "550m",
        address: "Obala Lazareta 3, 21000, Split",
        hours: "Mon-Sun: 08-21:30",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "blue-cave-boat-trip",
        name: "Blue cave – Boat trip",
        type: "Boat Trip",
        distanceFromApartment: "300m",
        address: "Trumbićeva obala 2, 21000, Split",
        hours: "Mon-Sun: 09-17",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "blue-lagoon-boat-trip",
        name: "Blue lagoon – Boat trip",
        type: "Boat Trip",
        distanceFromApartment: "300m",
        address: "Trumbićeva obala 2, 21000, Split",
        hours: "Mon-Sun: 09-17",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "sailing-trips-half-day",
        name: "Sailing trips – Half day",
        type: "Sailing",
        distanceFromApartment: "300m",
        address: "Trumbićeva obala 2, 21000, Split",
        hours: "Mon-Sun: 09-17",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "blue-cave-five-island-tour",
        name: "Blue Cave & Five Island Tour",
        type: "Island Tour",
        distanceFromApartment: "400m",
        address: "Obala Hrv.preporoda 12, 21000, Split",
        hours: "Mon-Sun: 08-22",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "blue-lagoon-tour",
        name: "Blue Lagoon Tour",
        type: "Lagoon Tour",
        distanceFromApartment: "400m",
        address: "Obala Hrv.preporoda 12, 21000, Split",
        hours: "Mon-Sun: 08-22",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    },
    {
        id: "split-sunset-cruise",
        name: "Split Sunset Cruise",
        type: "Sunset Cruise",
        distanceFromApartment: "400m",
        address: "Obala Hrv.preporoda 12, 21000, Split",
        hours: "Mon-Sun: 08-22",
        bookingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🚤"
    }
];