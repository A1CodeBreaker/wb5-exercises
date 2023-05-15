const cart = [
    { item: 'Bread', price: 3.29, quantity: 2 },
    { item: 'Milk', price: 4.09, quantity: 1 },
    { item: 'T-Bone Steak', price: 12.99, quantity: 2 },
    { item: 'Baking Potato', price: 1.89, quantity: 6 },
    { item: 'Iceberg Lettuce', price: 2.06, quantity: 1 },
    { item: 'Ice Cream - Vanilla', price: 6.81, quantity: 1 },
    { item: 'Apples', price: 0.66, quantity: 6 },
  ];
  
  // Exercise A
  function getCartItems(cartItem) {
    return cartItem.item;
  }
  const itemNames = cart.map(getCartItems);
  
  function displayName(cartItem) {
    console.log(cartItem);
  }
  itemNames.forEach(displayName);
  
  // Exercise B
  console.log('---');
  function reduceToTotalCost(currentTotal, arrayElement) {
    const elementCost = arrayElement.price * arrayElement.quantity;
    currentTotal += elementCost;
    return currentTotal;
  }
  const totalCost = cart.reduce(reduceToTotalCost, 0);
  console.log('total cost', totalCost);
  
  // Exercise C 
  console.log('---');
  cart.sort(function (a, b) {
    if (a.item < b.item) return -1;
    else if (a.item === b.item) return 0;
    else return 1;
  });
  
  const sortedNames = cart.map(getCartItems);
  sortedNames.forEach(displayName);
  
  
  console.log('---');
  itemNames.sort();
  itemNames.forEach(displayName);