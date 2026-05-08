export interface NightlifeVenue {
    id: string;
    name: string;
    type: string;
    musicGenre: string;
    distanceFromApartment: string;
    address: string;
    hours: string;
    facebookLink?: string;
    webLink?: string;
    notes?: string;
    icon: string;
}

// Single export array for nightlife
export const nightlife: NightlifeVenue[] = [
    {
        id: "tennis-bar",
        name: "Day & Night Bar 'Tennis'",
        type: "Bar",
        musicGenre: "Summer & Croatian music",
        distanceFromApartment: "6.7km",
        address: "Put Firula 18, Split",
        hours: "Sun-Thu: 08-02; Fri-Sat: 08-03",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    },
    {
        id: "zenta-night-club",
        name: "Night club & beach bar Zenta",
        type: "Night Club / Beach Bar",
        musicGenre: "Summer hits",
        distanceFromApartment: "6.9km",
        address: "Ul. Uvala Zenta 3, Split",
        hours: "Mon-Sun: 10-06",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    },
    {
        id: "marvlvs-library-jazz-bar",
        name: "Marvlvs Library Jazz Bar",
        type: "Jazz Bar",
        musicGenre: "Jazz music",
        distanceFromApartment: "450m",
        address: "Papalićeva ul. 4, Split",
        hours: "Mon-Sat: 17:00 - 00:00",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    },
    {
        id: "emperors-club",
        name: "EMPEROR'S CLUB",
        type: "Disco Club",
        musicGenre: "Jazz music",
        distanceFromApartment: "110m",
        address: "Trogirska ul. 7, Split",
        hours: "Mon-Sun: 22:30 - 04:00",
        notes: "LGBTQ+ friendly | Also known as Disco Club 305 A.D.",
        icon: "🍸"
    },
    {
        id: "central-the-club",
        name: "Central the Club",
        type: "Night Club",
        musicGenre: "Electronic music",
        distanceFromApartment: "270m",
        address: "Trg Gaje Bulata 4, Split",
        hours: "Mon-Sun: 00:30 - 06:00",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    },
    {
        id: "fabrique-pub",
        name: "Fabrique – Pub",
        type: "Pub",
        musicGenre: "Live Music or DJ",
        distanceFromApartment: "200m",
        address: "Trg Franje Tuđmana 3, Split",
        hours: "Mon-Sat: 09-02; Sun: 09-23",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    },
    {
        id: "vanilla-club",
        name: "Vanilla Club",
        type: "Night Club",
        musicGenre: "Summer hits, House & RnB",
        distanceFromApartment: "3.8km",
        address: "Poljudsko šetalište b.b.",
        hours: "Mon-Sun: 06-18",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    },
    {
        id: "taboo-beach-club",
        name: "Taboo – Beach club",
        type: "Beach Club",
        musicGenre: "Summer hits",
        distanceFromApartment: "8.8km",
        address: "Šetalište Pape Ivana Pavla II",
        hours: "Mon-Sat: 08-02; Sun: 08-02",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍸"
    }
];