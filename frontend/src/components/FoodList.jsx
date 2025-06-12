import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';
import { menuAPI } from '../services/api';

function FoodList({ cart, setCart }) {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        console.log('Fetching menu items...');
        const data = await menuAPI.getMenuItems();
        console.log('Received data:', data);
        setFoodItems(data);
        setLoading(false);
      } catch (err) {
        console.error('Error details:', err);
        setError(err.message || 'Failed to fetch menu items');
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return (
    <div className="text-center">
      <p className="text-red-500">{error}</p>
      <p className="text-sm text-gray-500">Please check the console for more details.</p>
    </div>
  );

  return (
    <div className="grid">
      {foodItems.map(item => (
        <FoodItem key={item._id} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default FoodList;
