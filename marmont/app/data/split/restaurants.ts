export interface Restaurant {
    id: string;
    name: string;
    type: string;
    cuisine: string;
    distanceFromApartment: string;
    address: string;
    hours: string;
    webLink?: string;
    facebookLink?: string;
    notes?: string;
    icon: string;
}

// Single export array for restaurants
export const restaurants: Restaurant[] = [
    {
        id: "chops-grill",
        name: "Chops Grill",
        type: "Steakhouse & Seafood",
        cuisine: "Steak & Seafood",
        distanceFromApartment: "30m",
        address: "Tončičeva ul. 4, Split",
        hours: "Mon-Sun: 08-11, 12-23",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "otprilike-ovako",
        name: "Otprilike Ovako",
        type: "Restaurant",
        cuisine: "Seafood, Mediterranean",
        distanceFromApartment: "240m",
        address: "Sinovčića ul. 5, Split",
        hours: "Mon-Sat: 06-23",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "kantun-paulina",
        name: "Kantun Paulina",
        type: "Fast Food",
        cuisine: "Fast Food",
        distanceFromApartment: "29m",
        address: "Matošića ul. 1, Split",
        hours: "Tue-Sun: 12-23",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "nostromo",
        name: "Nostromo",
        type: "Restaurant",
        cuisine: "Seafood, Mediterranean",
        distanceFromApartment: "130m",
        address: "Ul. Kraj Svete Marije 10, Split",
        hours: "Mon-Sun: 12-24",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "makamaka",
        name: "MakaMaka Acai & Poke Bar & Sushi",
        type: "Healthy / Japanese",
        cuisine: "Healthy, Hawaiian, Japanese",
        distanceFromApartment: "42m",
        address: "Ul. bana Josipa Jelačića 19, Split",
        hours: "Sun-Sat: 08-23",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "bajmonti",
        name: "Bajmonti",
        type: "Restaurant",
        cuisine: "Seafood, Mediterranean",
        distanceFromApartment: "78m",
        address: "Trg Republike 1, Split",
        hours: "Sun-Sat: 08-00; Sun: 09-00",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "articok",
        name: "Artičok",
        type: "Restaurant",
        cuisine: "International, Mediterranean",
        distanceFromApartment: "150m",
        address: "Ul. bana Josipa Jelačića 3, Split",
        hours: "Mon-Sat: 12-00; Sun: 06-00",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "corto-maltese",
        name: "Corto Maltese",
        type: "Restaurant",
        cuisine: "Mediterranean, Healthy",
        distanceFromApartment: "140m",
        address: "Obrov ul. 7, Split",
        hours: "Sun-Sat: 09-23",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "sug",
        name: "Sug",
        type: "Restaurant",
        cuisine: "Seafood, Mediterranean",
        distanceFromApartment: "700m",
        address: "Ul. Tolstoeva 1a, Split",
        hours: "Sat-Mon: 08-23; Sun: closed",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    },
    {
        id: "restaurant-dvor",
        name: "Restaurant Dvor",
        type: "Restaurant",
        cuisine: "Croatian cuisine",
        distanceFromApartment: "2.1km",
        address: "Put Firula 14, Split",
        hours: "Mon-Sun: 08-00",
        facebookLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🍽️"
    }
];