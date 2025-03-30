interface collectionType {
    id: number;
    name: string;
    description: string;
    image: string;
}

export const COLLECTIONS: collectionType[] = [
    {
        id: 1,
        name: 'Celestial',
        description: 'Inspired by the stars and cosmos',
        image: './images/celestial1.png'
    },
    {
        id: 2,
        name: 'Minimalist',
        description: 'Clean lines and subtle elegance',
        image: './images/minimalist1.png'
    },
    {
        id:3,
        name: 'Nature\'s Geometry',
        description: 'Organic forms meet precise structures',
        image: './images/nature1.png'
    }
];