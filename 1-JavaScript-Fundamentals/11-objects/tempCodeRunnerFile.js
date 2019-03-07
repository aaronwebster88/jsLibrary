  let garden = {
      vegetable: 'zucchini',
      flower: 'sun flower',
      fruit: 'grape',
      water: true,
      sun: true,
      size: 10
  };

  //console.log(garden.vegetable); // 'zucchini'

  let x = 'vegetable'

  let baking = {};
  baking['zucchini'] = 'better make some bread!';


  //console.log(baking.garden.vegetable); ---- won't work

  //console.log(baking[garden['vegetable']]);

  let key = 'water';

  Object.keys(garden).forEach(g => {
      if (key === g) {
          console.log(garden[key]); // true
      }
  });