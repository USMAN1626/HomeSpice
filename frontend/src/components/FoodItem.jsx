import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuAPI } from '../services/api';

function FoodItem({ item, cart, setCart }) {
  const [persons, setPersons] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOrder = async () => {
    try {
      setLoading(true);
      setError(null);

      const orderItem = {
        menuItemId: item._id,
        quantity: persons,
        totalPrice: item.price * persons
      };

      const updatedCart = [...cart, { ...item, personCount: persons }];
      setCart(updatedCart);
      
      navigate('/checkout', { 
        state: { 
          cart: updatedCart,
          orderDetails: orderItem
        } 
      });
    } catch (err) {
      setError('Failed to process order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="food-item-card">
      <img src={item.image} alt={item.name} className="food-image" />
      <h3 className="food-name">{item.name}</h3>
      <p className="food-info">Rs: {item.price} | Serves: {item.serves} person(s)</p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        type="number"
        min="1"
        value={persons}
        onChange={(e) => setPersons(parseInt(e.target.value))}
        className="person-input"
        placeholder="Number of persons"
        disabled={loading}
      />
      <button 
        onClick={handleOrder} 
        className={`order-button ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Order Now'}
      </button>
    </div>
  );
}

export default FoodItem;
