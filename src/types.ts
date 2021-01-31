export interface DiscoveryData {
    sections: Array<Section>
}

export interface Section {
    title: string;
    restaurants: Array<Restaurant>
}

export interface Restaurant {
    blurhash: string;
    launch_date: string;
    location: Array<number>;
    name: string;
    online: boolean;
    popularity: number;
}