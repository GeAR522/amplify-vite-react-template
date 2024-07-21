import { FoodItem } from './types/FoodItem';

const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'California Maki',
    description: 'Jersey Crab with Avocado, cucumber, and Japanese Mayo',
    price: 9.99,
    img: 'https://i.pinimg.com/736x/9c/29/5c/9c295c2e674501c57d267589c59fc5f7.jpg',
    allergys: [],
  },
  {
    id: '2',
    name: 'Salmon Temaki',
    description: 'Fresh Salmon and avocado',
    price: 9.99,
    img: 'https://sushi-geneve.ch/wp-content/uploads/2023/03/sakura-temaki-saumon-avocat-425x425-1.jpg',
    allergys: [],
  },
  {
    id: '3',
    name: 'Takko Nigiri',
    description: 'Octopus with wasabi',
    price: 14.99,
    img: 'https://sd-images.simplydelivery.io/cdn-cgi/image/format=auto,quality=85,width=500,height=350,fit=contain/https://sd-images.simplydelivery.io/5f71d307b677b/images/articles/d120bf0b212e41523f41d9215de11e1717612ac2.jpeg',
    allergys: [],
  },
  {
    id: '4',
    name: 'Hotate Nigiri',
    description: 'Freshly sliced scallops with wasabi',
    price: 16.99,
    img: 'https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-25011000000000000/menu/items/8/item-400000028184796038_1680544267.jpg?size=medium',
    allergys: [],
  },
  {
    id: '5',
    name: 'Unagi Maki',
    description:
      'Delicately fried eel covered in a sweet bbq sauce and sesame seeds',
    price: 19.99,
    img: 'https://imageproxy.wolt.com/venue/61a0c8868c417b0cb0651863/221f5ff6-527d-11ec-9fef-969cbfc4ee31_mp2_2496.jpg',
    allergys: [],
  },
  {
    id: '6',
    name: 'Chicken Gyouza',
    description: 'Gyouza filled with chicken coated in a sweet soy glaze',
    price: 15.99,
    img: 'https://imagevars.gulfnews.com/2021/12/12/Chicken-gyoza-recipe-_17daea9e28f_base.jpg',
    allergys: ['nuts', 'glutton'],
  },
  {
    id: '7',
    name: 'Vegatable Gyouza',
    description:
      'Vegatarian gyouza filled with cabbage, carrot, onion, garlic, diced mushrooms fried in sesame oil',
    price: 12.99,
    img: 'https://www.justonecookbook.com/wp-content/uploads/2020/01/Gyoza-3112-I.jpg',
    allergys: ['nuts'],
  },
];

export default foodItems;
