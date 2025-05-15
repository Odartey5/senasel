import React from 'react';

const Menu = () => {
  const dishes = [
    { name: "Pasta", price: "$12" },
    { name: "Pizza", price: "$15" },
    { name: "Salad", price: "$10" },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>{dish.name} - {dish.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;