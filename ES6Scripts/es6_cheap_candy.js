'use strict';

const products = [
    { product: 'Gummy Worms', price: 5.79 },
    { product: 'Plain M&Ms', price: 2.89 },
    { product: 'Peanut M&Ms', price: 2.89 },
    { product: 'Peanut M&Ms with Chocolate Chips', price: 2.89 },
    { product: 'M&Ms', price: 2.89 },
    { product: 'Swedish Fish', price: 3.79 },
    { product: 'Fruit Snacks', price: 0.49 },
    { product: 'Snickers', price: 2.75 },
    { product: 'Milky Way', price: 3.25 },
    { product: 'Bubbaloo', price: 1.5 },
    { product: 'Kit Kat', price: 4.95 },
    { product: 'Twix', price: 2.0 }
  ];
  
  const under4 = products.filter((item) => item.price < 4);
  under4.forEach((item) => console.log(item.price));
  
  const mms = products.filter((item) => item.product.indexOf('M&Ms') !== -1);
  mms.forEach((item) => console.log(item.product));
  
  const foundFish = products.find((item) => item.product === 'Swedish Fish');
  if (foundFish) {
    console.log('yes, we have swedish fish');
  } else {
    console.log('no, we do not have swedish fish');
  }