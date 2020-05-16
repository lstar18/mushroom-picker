let basket = [];

const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Liza',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/09/06/19/53/mushroom-3659165__340.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Lori',
    description: 'portobello',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/09/29/06/56/mushroom-2798150__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom3',
    name: 'Sy',
    description: 'wild',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Lev',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/09/06/19/53/mushroom-3659165__340.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Ellen',
    description: 'giant',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/10/04/21/36/fly-agaric-2817723__340.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Steve',
    description: 'wild',
    imgUrl: 'https://cdn.pixabay.com/photo/2014/11/28/00/07/mushrooms-548360__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Maxx',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Franki',
    description: 'giant',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/09/11/17/19/mushroom-2739730__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Alex',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/08/05/23/37/beautiful-foot-boletus-2586702__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Andi',
    description: 'wild',
    imgUrl: 'https://cdn.pixabay.com/photo/2019/10/07/18/06/mushrooms-4533193__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Julie',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2016/02/11/19/46/fungus-1194380__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Stacey',
    description: 'giant',
    imgUrl: 'https://cdn.pixabay.com/photo/2014/10/01/16/10/mushroom-468751__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Zoey',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2019/10/20/13/12/mushroom-4563647__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Dylan',
    description: 'edible',
    imgUrl: 'https://cdn.pixabay.com/photo/2015/09/02/13/24/fly-agaric-919049__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Elizabeth',
    description: 'wild',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/09/24/21/55/mushroom-3700922__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'David',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2015/10/01/20/15/mushroom-967626__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Molly',
    description: 'wild',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/10/16/23/24/mushrooms-3752807__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Susan',
    description: 'edible',
    imgUrl: 'https://cdn.pixabay.com/photo/2019/11/25/16/42/fantasy-4652501__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Mike',
    description: 'common',
    imgUrl: 'https://cdn.pixabay.com/photo/2019/11/05/21/54/fly-agaric-4604694__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Amy',
    description: 'edible',
    imgUrl: 'https://cdn.pixabay.com/photo/2019/09/30/16/36/mite-4516249__340.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];
const checkBasketforMushrooms = (randomMushroom) => {
  if (basket.length > 1 && randomMushroom.isPoisonous) {
    basket.pop();
    basket.splice(0, 2);
    alert('You grabbed a poisonous mushroom, you could die');
  } else if (randomMushroom.isPoisonous) {
    basket = [];
  } else if (randomMushroom.isDeadly) {
    basket = [];
    alert('You are dead');
  } else {
    basket.push(randomMushroom);
  }
};
const pickAMushroom = () => {
  const randomMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  checkBasketforMushrooms(randomMushroom);
};

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

export default {
  getMushrooms, getBasket, pickAMushroom,
};
