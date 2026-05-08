export interface ShoppingLocation {
    id: string;
    name: string;
    type: string;
    category: string;
    distanceFromApartment: string;
    address: string;
    hours?: string;
    webLink?: string;
    notes?: string;
    icon: string;
}

// Single export array for shopping
export const shopping: ShoppingLocation[] = [
    // Clothing Stores
    {
        id: "zara",
        name: "ZARA",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "120m",
        address: "Marmontova ul. 7, Split",
        hours: "Mon-Sat: 09-23; Sun: 10-23",
        icon: "🛍️"
    },
    {
        id: "tommy-hilfiger",
        name: "Tommy Hilfiger",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "110m",
        address: "Ul. kralja Tomislava 1, Split",
        hours: "Mon-Fri: 08:30-20:30; Sat: 08:30-20",
        icon: "🛍️"
    },
    {
        id: "max-mara",
        name: "Max Mara",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "250m",
        address: "Narodni trg 4, Split",
        hours: "Mon-Fri: 09-21; Sat: 09-20; Sun: 10-13, 17-21",
        icon: "🛍️"
    },
    {
        id: "massimo-dutti",
        name: "Massimo Dutti",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },
    {
        id: "oysho",
        name: "OYSHO",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },
    {
        id: "pull-bear",
        name: "PULL&BEAR",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },
    {
        id: "stradivarius",
        name: "Stradivarius",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },
    {
        id: "bershka",
        name: "Bershka",
        type: "Clothing Store",
        category: "Fashion",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },

    // Beauty & Personal Care
    {
        id: "dm",
        name: "dm",
        type: "Drugstore",
        category: "Beauty & Personal Care",
        distanceFromApartment: "5km",
        address: "Obala kneza Domagoja 3, Split",
        hours: "Mon-Sat: 07-22; Sun: 08-21",
        icon: "🛍️"
    },
    {
        id: "bipa",
        name: "BIPA",
        type: "Drugstore",
        category: "Beauty & Personal Care",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },

    // Grocery & Supermarkets
    {
        id: "interspar",
        name: "INTERSPAR",
        type: "Supermarket",
        category: "Grocery",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        notes: "Located in Mall of Split",
        icon: "🛍️"
    },

    // Shopping Malls
    {
        id: "jocker-mall",
        name: "Jocker – Shopping Mall",
        type: "Shopping Mall",
        category: "Mall",
        distanceFromApartment: "2.5km",
        address: "Put Brodarice 6, 21000, Split",
        hours: "Mon-Sun: 09-21",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🛍️"
    },
    {
        id: "city-centar-mall",
        name: "City Centar – Shopping Mall",
        type: "Shopping Mall",
        category: "Mall",
        distanceFromApartment: "9.4km",
        address: "Vukovarska ul. 207, 21000, Split",
        hours: "Mon-Sun: 09-21",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🛍️"
    },
    {
        id: "mall-of-split",
        name: "Mall of Split",
        type: "Shopping Mall",
        category: "Mall",
        distanceFromApartment: "8.1km",
        address: "Ul. Josipa Jovića 93, Split",
        hours: "Mon-Sun: 09-21",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        notes: "Stores: Massimo Dutti, OYSHO, ZARA, PULL&BEAR, Stradivarius, Bershka, BIPA, INTERSPAR",
        icon: "🛍️"
    },

    // Souvenirs
    {
        id: "handmade-in-split",
        name: "Handmade in Split",
        type: "Souvenir Store",
        category: "Souvenirs",
        distanceFromApartment: "260m",
        address: "Zadarska ul. 1, Split",
        hours: "Mon-Sun: 10-22",
        webLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        icon: "🛍️"
    }
];