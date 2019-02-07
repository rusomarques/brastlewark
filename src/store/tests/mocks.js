export const initialState = {
  gnomes: null,
  searchResults: null,
  searching: false,
  pagesShown: 1
};

export const gnomes = [
  {
    age: 306,
    friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
    hair_color: 'Pink',
    height: 107.75835,
    id: 0,
    name: 'Tobus Quickwhistle',
    professions: [
      'Metalworker',
      'Woodcarver',
      'Stonecarver',
      ' Tinker',
      'Tailor',
      'Potter'
    ],
    thumbnail:
      'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
    weight: 39.065952
  },
  {
    age: 288,
    friends: [],
    hair_color: 'Green',
    height: 110.43628,
    id: 1,
    name: 'Fizkin Voidbuster',
    professions: [
      'Brewer',
      'Medic',
      'Prospector',
      'Gemcutter',
      'Mason',
      'Tailor'
    ],
    thumbnail:
      'http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg',
    weight: 35.279167
  }
];

export const searchInput = 'Tobus';

export const searchResults = gnomes.slice(0, 1);
