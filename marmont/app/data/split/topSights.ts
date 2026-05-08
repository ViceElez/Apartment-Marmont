export interface Attraction {
    id: string;
    name: string;
    type: string;
    distanceFromApartment: string;
    address: string;
    hours?: string;
    webLink?: string;
    notes?: string;
    icon: string;
}

// Single export array for attractions
export const topSights: Attraction[] = [
    // Theaters & Concert Halls
    {
        id: "puppet-theatre",
        name: "Split City Puppet Theatre",
        type: "Theatre",
        distanceFromApartment: "22m",
        address: "Tončićeva ul. 1, 21000, Split",
        hours: "Always available",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "⭐"
    },
    {
        id: "concert-hall",
        name: "Concert hall",
        type: "Concert Hall",
        distanceFromApartment: "26m",
        address: "Tončićeva ul. 1, 21000, Split",
        hours: "Always available",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "⭐"
    },
    {
        id: "croatian-national-theater",
        name: "Croatian National Theater in Split",
        type: "Theater",
        distanceFromApartment: "250m",
        address: "Trg Gaje Bulata 1, 21000, Split",
        hours: "Always available",
        icon: "⭐"
    },

    // Squares & Public Spaces
    {
        id: "the-riva",
        name: "The Riva",
        type: "Promenade / Waterfront",
        distanceFromApartment: "400m",
        address: "Split Riva",
        hours: "Always available",
        icon: "⭐"
    },
    {
        id: "peristyle-square",
        name: "Peristyle – Square",
        type: "Historical Square",
        distanceFromApartment: "400m",
        address: "Trg Peristil BB, Split",
        hours: "Always available",
        icon: "⭐"
    },
    {
        id: "prokurative-square",
        name: "Prokurative – Square",
        type: "Square",
        distanceFromApartment: "250m",
        address: "Trg Republike, Split",
        hours: "Always available",
        icon: "⭐"
    },

    // Historical & Religious Sites
    {
        id: "cathedral-saint-dominius",
        name: "Cathedral of Saint Dominius",
        type: "Cathedral",
        distanceFromApartment: "500m",
        address: "Ul. Kraj Svetog Duje 3, Split",
        hours: "Mon-Sat: 09-16:30; Sun: 12-17:30",
        icon: "⭐"
    },
    {
        id: "diocletians-palace",
        name: "Diocletian's Palace",
        type: "Historical Palace",
        distanceFromApartment: "400m",
        address: "Dioklecijanova 1",
        hours: "Always available",
        icon: "⭐"
    },
    {
        id: "let-me-pass-street",
        name: "Let me pass street",
        type: "Historical Street",
        distanceFromApartment: "400m",
        address: "Ul. Kraj Svetog Ivana 1, Split",
        hours: "Always available",
        icon: "⭐"
    },
    {
        id: "gregory-of-nin",
        name: "Gregory of Nin",
        type: "Statue / Monument",
        distanceFromApartment: "400m",
        address: "Ul. kralja Tomislava 12, Split",
        hours: "Always available",
        icon: "⭐"
    },
    {
        id: "roman-ruins-salona",
        name: "Roman ruins of Salona-Solin",
        type: "Archaeological Site",
        distanceFromApartment: "11.9km",
        address: "Put Salone bb, Solin",
        hours: "Always available",
        icon: "⭐"
    },
    {
        id: "klis-fortress",
        name: "Klis – Fortress",
        type: "Fortress",
        distanceFromApartment: "17.2km",
        address: "Trg Mejdan 10, Klis",
        hours: "Mon-Sun: 09:00-19:00",
        icon: "⭐"
    },

    // Stadiums
    {
        id: "poljud-stadium",
        name: "Hajduk Split – Poljud stadium",
        type: "Stadium",
        distanceFromApartment: "3.6km",
        address: "8 Mediteranskih Igara 2, Split",
        hours: "Mon-Sun: 08-22",
        icon: "⭐"
    },

    // Museums
    {
        id: "museum-of-illusions",
        name: "Museum of illusions",
        type: "Museum",
        distanceFromApartment: "350m",
        address: "Ul. Andrije Kačića Miošića 2, 21000, Split",
        hours: "Sun-Sat: 09-22",
        icon: "⭐"
    },
    {
        id: "croatian-maritime-museum",
        name: "Croatian Maritime Museum",
        type: "Museum",
        distanceFromApartment: "5.3km",
        address: "Glagoljaška ul. 18, Split",
        hours: "Mon-Sat: 09-20",
        icon: "⭐"
    },
    {
        id: "city-museum-split",
        name: "City Museum of Split",
        type: "Museum",
        distanceFromApartment: "400m",
        address: "Papalićeva ul. 1, Split",
        hours: "Mon-Fri: 08-20; Sat-Sun: 10-14",
        icon: "⭐"
    },
    {
        id: "ethnographic-museum",
        name: "Ethnographic Museum",
        type: "Museum",
        distanceFromApartment: "500m",
        address: "Ul. Iza Vestibula 4, Split",
        hours: "Mon-Fri: 09:30-20",
        icon: "⭐"
    },
    {
        id: "archaeological-museum",
        name: "Archaeological Museum",
        type: "Museum",
        distanceFromApartment: "700m",
        address: "Ul. Zrinsko Frankopanska 25, Split",
        hours: "Mon-Fri: 09-14, 16-20; Sat: 09-14",
        icon: "⭐"
    },
    {
        id: "ivan-mestrovic-gallery",
        name: "Ivan Meštrović Gallery",
        type: "Art Gallery",
        distanceFromApartment: "2km",
        address: "Š. Ivana Meštrovića 46, Split",
        hours: "Mon-Sat: 09:00-16:00",
        icon: "⭐"
    },

    // Restaurant (from Salona description - keeping as attraction)
    {
        id: "antonicin-mlin",
        name: "Antoničin Mlin - Restaurant",
        type: "Restaurant",
        distanceFromApartment: "15.9km",
        address: "Ul. Kralja Petra Krešimira IV, Solin",
        hours: "Wed-Fri: 11-22; Sat-Sun: 12-22",
        notes: "Located near Roman ruins of Salona",
        icon: "⭐"
    }
];