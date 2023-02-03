import images from './images';

const wines = [
  {
    title: 'Sarropia Merlot',
    price: 'Ksh 3000',
    tags: 'Red Wine | Smooth and fruit flavors',
  },
  {
    title: 'Four Cousins ',
    price: 'Ksh 2500',
    tags: 'Sweet Red | 1.5 Litre',
  },
  {
    title: '4th Street',
    price: 'Ksh 1500',
    tags: 'White Sweet| 750 ml',
  },
  {
    title: 'Monkey Shoulder',
    price: 'Ksh 5000',
    tags: '	whisky | 750 ml | ABV 40%',
  },
  {
    title: 'Tanqueray',
    price: 'Ksh 3000',
    tags: '	Gin | 750 ml | ABV 	40%',
  },
];

const cocktails = [
  {
    title: 'Mojito ',
    price: 'Ksh 550',
    tags: 'White rum | Mint leaves | Sweet and Sour | Topped up with fizzy club soda',
  },
  {
    title: "Long Island",
    price: 'Ksh 800',
    tags: 'Dark rum | Vodka | Gin | Tequila| Triple sec',
  },
  {
    title: 'Margarita',
    price: 'Ksh 600',
    tags: 'Tequila | orange liqueur | freshly squeezed lime juice',
  },
  {
    title: 'Martini ',
    price: 'Ksh 500',
    tags: 'Gin | vodka | Dry Vermouth',
  },
  {
    title: 'Old Fashioned',
    price: 'Ksh 900',
    tags: 'Very classic Scotch whisky | orange essence | bitters',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
