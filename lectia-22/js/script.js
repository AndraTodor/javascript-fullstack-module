function getStone(stoneName) {
  const stones = {
    Emerald: {
      price: 1300,
      quantity: 4,
    },
    Diamond: {
      price: 2700,
      quantity: 3,
    },
    Sapphire: {
      price: 400,
      quantity: 7,
    },
    Rubble: {
      price: 200,
      quantity: 2,
    },
  };

  // return Promise.resolve(stones[stoneName]);
  // return new Promise(resolve => setTimeout( () => resolve(stones[stoneName]), 1000));
}

// /*
//     1. await poate fi utilizat numai în cadrul funcțiilor asincrone
//     2. instrucțiunea await îngheață execuția unei funcții asincrone până când promisiunea intră în starea respinsă sau îndeplinită
//     (adică simulăm sincronicitatea în execuția codului asincron)
//     3. await nu va returna o promisiune, ci rezultatul acesteia
//     4. o funcție asincronă returnează întotdeauna o promisiune
// */
