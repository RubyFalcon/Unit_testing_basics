const someOrder = {
  items: [
    {
      name: "Dragon food",
      price: 8,
      quantity:8,
    },
    {
      name: "Dragon cage(small)",
      price: 800,
      quantity:2,
    },
    
    {
      name: "Shipping",
      price: 800,
      quantity:2,
    },
    
  ],
};

const orderTotal = order => order.items
    .reduce((prev, cur) => prev +(cur.price * cur.quantity), 0)

result = orderTotal(someOrder) //1664

