export interface ServiceLocation {
    id: string;
    name: string;
    type: string;
    distanceFromApartment: string;
    address: string;
    hours?: string;
    phone?: string;
    notes?: string;
    icon: string;
}

export interface LaundryPriceList {
    selfServiceWashing: number;
    selfServiceDrying: number;
    detergent: number;
    fullService: number;
}

export interface LaundryService extends ServiceLocation {
    priceList: LaundryPriceList;
    companyName: string;
}

// Single export array for amenities
export const amenities: ServiceLocation[] = [
    {
        id: "grocery-store",
        name: "Spar",
        type: "Grocery Store / Supermarket",
        distanceFromApartment: "280m",
        address: "Šubićeva 5 7, 21000, Split",
        hours: "Mon-Sat: 07-22; Sun: 08-22",
        icon: "🛒"
    },
    {
        id: "bakery",
        name: "Bobis",
        type: "Bakery",
        distanceFromApartment: "82m",
        address: "Marmontova ul. 5, Split",
        hours: "Sun-Sat: 07-21",
        icon: "🥐"
    },
    {
        id: "fishmarket",
        name: "Fishmarket",
        type: "Fishmarket",
        distanceFromApartment: "160m",
        address: "Hrvatska, Obrov ul. 5, 21000, Split",
        hours: "Mon-Sat: 06-13; Sun: 06-12",
        icon: "🐟"
    },
    {
        id: "atm",
        name: "Euronet",
        type: "ATM",
        distanceFromApartment: "100m",
        address: "Trogirska ul. 10, Split",
        hours: "0-24",
        notes: "Worldwide",
        icon: "🏧"
    },
    {
        id: "exchange-office",
        name: "Auro Domus",
        type: "Exchange Office",
        distanceFromApartment: "400m",
        address: "Ul. Mihovilova širina 2, Split",
        hours: "Fri-Tue: 08-22; Wed-Thu: 10-20",
        icon: "💱"
    },
    {
        id: "hospital",
        name: "KBC Split Firule",
        type: "Hospital / Ambulance",
        distanceFromApartment: "6.2km",
        address: "Spinčićeva ul. 1, Split",
        hours: "Always available",
        icon: "🚑"
    },
    {
        id: "police",
        name: "State Police",
        type: "Police Station",
        distanceFromApartment: "2.5km",
        address: "Pojišanska ul. 2, Split",
        hours: "Always available",
        icon: "🚓"
    },
    {
        id: "post-office",
        name: "Hrvatska pošta",
        type: "Post Office",
        distanceFromApartment: "400m",
        address: "Ul. kralja Tomislava 9, Split",
        hours: "Mon-Fri: 08-20; Sat: 08-13",
        icon: "📮"
    },
    {
        id: "taxi-stand",
        name: "Taxi Stand",
        type: "Taxi",
        distanceFromApartment: "240m",
        address: "Ul. kralja Tomislava 9, Split",
        hours: "0-24",
        icon: "🚕"
    },
    {
        id: "taxi-bus-stand",
        name: "Taxi / Bus Stand",
        type: "Taxi / Bus",
        distanceFromApartment: "270m",
        address: "Trg Gaje Bulata 5, 21000, Split",
        hours: "0-24",
        icon: "🚌"
    },
    {
        id: "laundry",
        name: "Laundry service",
        type: "Laundry Service",
        distanceFromApartment: "Not specified",
        address: "Šperun ul. 1, Split",
        hours: "Sat-Sun: 08-20",
        phone: "+385 0321 315 888 / +385 098 931 6401",
        companyName: "Laundrette modulj d.o.o.",
        notes: "Queen WEB - Self service: washing 25km, drying 20km, detergent 5km | Full service: 75km",
        priceList: {
            selfServiceWashing: 25,
            selfServiceDrying: 20,
            detergent: 5,
            fullService: 75
        },
        icon: "🧺"
    } as LaundryService
];