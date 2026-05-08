export interface Beach {
    id: string;
    name: string;
    type: string;
    beachType: string;
    distanceFromApartment: string;
    address: string;
    features: string[];
    notes?: string;
    icon: string;
}

// Single export array for beaches & swimming pools
export const beaches: Beach[] = [
    {
        id: "bacvice-beach",
        name: "Bačvice Beach",
        type: "Beach",
        beachType: "Sandy Beach",
        distanceFromApartment: "1.6km",
        address: "Šetališta Petra Preradovića",
        features: ["Family friendly", "Baby friendly"],
        icon: "🏖️"
    },
    {
        id: "obojena-kastalet-beach",
        name: "Obojena - Kaštalet beach",
        type: "Beach",
        beachType: "Gravel beach",
        distanceFromApartment: "2.5km",
        address: "Šetalište Ivana Meštrovića",
        features: ["Family friendly", "Baby friendly"],
        icon: "🏖️"
    },
    {
        id: "mistral-beach",
        name: "Mistral Beach",
        type: "Beach",
        beachType: "Gravel beach",
        distanceFromApartment: "7.6km",
        address: "Šetalište Pape Ivana Pavla II",
        features: ["Family friendly", "Baby friendly"],
        icon: "🏖️"
    },
    {
        id: "znjan-beach",
        name: "Žnjan beach",
        type: "Beach",
        beachType: "Gravel beach",
        distanceFromApartment: "1.6km",
        address: "Žnjan",
        features: ["Family friendly", "Baby friendly"],
        icon: "🏖️"
    },
    {
        id: "kasjuni-beach",
        name: "Kašjuni beach",
        type: "Beach",
        beachType: "Gravel Beach",
        distanceFromApartment: "3.6km",
        address: "Šetalište Ivana Meštrovića",
        features: ["Baby friendly", "Pet friendly"],
        icon: "🏖️"
    },
    {
        id: "bene-beach",
        name: "Bene Beach",
        type: "Beach",
        beachType: "Gravel Beach, Rocky Beach",
        distanceFromApartment: "5.9km",
        address: "Šetalište Martina Tartaglie",
        features: ["Baby friendly"],
        icon: "🏖️"
    },
    {
        id: "bazen-jadran",
        name: "Bazen Jadran",
        type: "Swimming Pool",
        beachType: "Swimming pool",
        distanceFromApartment: "1.4km",
        address: "Sustipanski put 3, Split",
        features: ["Family friendly", "Baby friendly"],
        icon: "🏖️"
    }
];