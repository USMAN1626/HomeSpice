import React, { useState, useEffect } from 'react';
import FoodList from '../components/FoodList';

function Home() {
  const [cart, setCart] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch('/api/menu') 
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);

  return (
    <div className="home-container">
      <h1 className="heading">Today's Menu</h1>
      <FoodList foodItems={foodItems} cart={cart} setCart={setCart} />
    </div>
  );
}

export default Home;
