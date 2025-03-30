interface productType {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const PRODUCTS: productType[] = [
    {
        id: 1,
        name: 'Celestial Diamond Ring',
        price: 1250,
        image: './images/ring1.png',
        category: 'rings'
      },
      {
        id: 2,
        name: 'Minimalist Gold Bracelet',
        price: 680,
        image: './images/bracelet1.png',
        category: 'bracelets'
      },
      {
        id: 3,
        name: 'Crescent Moon Necklace',
        price: 790,
        image: './images/necklace1.png',
        category: 'necklaces'
      },
      {
        id: 4,
        name: 'Geometric Sapphire Earrings',
        price: 950,
        image: './images/earrings1.png',
        category: 'earrings'
      }
]