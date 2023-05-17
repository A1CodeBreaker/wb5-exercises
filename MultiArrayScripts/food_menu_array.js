'use strict';

let menu = [
    [
      { item: "Sausage and Egg Biscuit", price: 3.69 },
      { item: "Bacon and Egg Biscuit", price: 3.49 },
      { item: "Ham and Egg Biscuit", price: 3.29 },
    ],
    [
      { item: "Sausage Sandwich", price: 4.69 },
      { item: "Bacon Sandwich", price: 4.49 },
      { item: "Ham Sandwich", price: 4.29 },
      { item: "Bread Sandwich", price: 4.29 },
    ],
    [
      { item: "Cereal", price: 5.69 },
      { item: "Chicken Dinner", price: 5.49 },
      { item: "Chicken Soup", price: 5.29 },
      { item: "Pork Dumplings", price: 5.29 },
      { item: "Lasagna", price: 5.29 },
    ],
  ];

  let meal = 0
  if (meal === 0) console.log("Breakfeast Menu");
  else if (meal === 1) console.log("Lunch Menu");
  else console.log("Dinner Menu");
  menu[meal].forEach((item) => console.log(item.item, "$" + item.price));
  console.log("_".repeat(30));