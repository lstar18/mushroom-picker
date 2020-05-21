let basket = [];

const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Lion\'s Mane',
    description: 'common',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/Lions_Mane_Mushroom4.jpg.860x0_q70_crop-smart.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Puffball',
    description: 'portobello',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/puffballs2.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom3',
    name: 'Indigo Milkcap',
    description: 'wild',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/Indigo_Milkcap2.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Latticed Stinkhorn',
    description: 'common',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/Clathrus_ruber3.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Bleeding Tooth',
    description: 'giant',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/bleedingtooth1.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Amethyst Deceiver',
    description: 'edible',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/Amethyst_Deceiver3.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Veiled Lady Mushroom',
    description: 'common',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/veiledlady2.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Mycena Chlorophos',
    description: 'giant',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/glowingmushroom1.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Dog Stinkhorn',
    description: 'common',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/dogstink4.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Entoloma Hochstetteri',
    description: 'wild',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/Entoloma_hochstetteri1.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Turkey Tail',
    description: 'common',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/turkeytail1.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Devil\'s Cigar',
    description: 'giant',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/591px-Chorioactis_geaster_1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'False Morel',
    description: 'common',
    imgUrl: 'https://media.treehugger.com/assets/images/2013/08/falsemorel3.jpg.860x0_q70_crop-smart.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Bread Dough',
    description: 'edible',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555994572/shape/mentalfloss/640px-clitopilus_prunulus_cropped.jpg?itok=_ZQCFKq2',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Yellow Staining',
    description: 'wild',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555994572/shape/mentalfloss/640px-tricholoma_scalpuratum_20061014wa.jpg?itok=eB7ACUaR',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Devil\'s Finger',
    description: 'common',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555915696/shape/mentalfloss/biteyourbum_devils_fingers.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Bug Sputnik',
    description: 'wild',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555915696/shape/mentalfloss/lynette_turq_elfcup.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Witches\' Butter',
    description: 'edible',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555915685/shape/mentalfloss/witches_butter.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Jack O Lantern',
    description: 'common',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555915685/shape/mentalfloss/jack_olantern_flickr.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Plums and Custard',
    description: 'edible',
    imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555915684/shape/mentalfloss/plums_and_custard.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];
const checkBasketforMushrooms = (randomMushroom) => {
  const sortedBasket = Array.from(new Set(basket));
  if (basket.length > 1 && randomMushroom.isPoisonous) {
    basket.pop();
    basket.splice(0, 2);
    alert('You grabbed a poisonous mushroom, you could die!');
  } else if (randomMushroom.isPoisonous) {
    basket = [];
    alert('You grabbed a poisonous mushroom, you could die!');
  } else if (randomMushroom.isDeadly) {
    basket = [];
    alert('You grabbed a DEADLY mushroom, you will die :(! ');
  } else if (randomMushroom.isMagic) {
    const regularMushroom = mushrooms.filter((mushroom) => !mushroom.isDeadly && !mushroom.isMagic && !mushroom.isPoisonous);
    const mushroomOne = regularMushroom[Math.floor(Math.random() * regularMushroom.length)];
    const mushroomTwo = regularMushroom[Math.floor(Math.random() * regularMushroom.length)];
    const mushroomThree = regularMushroom[Math.floor(Math.random() * regularMushroom.length)];
    basket.push(mushroomOne, mushroomTwo, mushroomThree);
    alert('You grabbed the magic mushroom!!! You WIN!');
  } else if (sortedBasket.length === 15) {
    alert('You WIN!!!');
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
