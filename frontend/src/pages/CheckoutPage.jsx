import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { calculateTotal } from "../utils/ calculateTotal";
import { isTimeValid } from '../utils/timeValidator';
import { menuAPI } from "../services/api"; 

function CheckoutPage() {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [error, setError] = useState('');

  const total = calculateTotal(cart);

  const getMinDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 5);
    return now.toISOString().slice(0, 16);
  };

  const handleSubmit = async () => {
    setError('');
    console.log(" Form submitted");
    console.log(" Delivery time:", deliveryTime);

    if (!deliveryTime) {
      setError("Please select a delivery time");
      return;
    }

    if (!isTimeValid(deliveryTime)) {
      setError("Delivery time must be at least 5 hours from now");
      return;
    }

    if (!address.trim()) {
      setError("Please enter a delivery address");
      return;
    }

    const orderData = {
      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.personCount,
      })),
      total,
      address,
      deliveryTime,
    };

    console.log(" Sending Order:", orderData);

    try {
      const response = await menuAPI.placeOrder(orderData);
      console.log("Order successfull:", response);
      alert(`Order placed successfully! Your order has been confirmed.`);
   
      window.location.href = '/';
    } catch (err) {
      console.error("Error! placing order:", err);
      setError('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>

      <ul className="order-summary">
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.personCount} persons
          </li>
        ))}
      </ul>

      <p className="checkout-total">Total: Rs {total}</p>

      <input
        type="text"
        placeholder="Delivery Address"
        className="checkout-input"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="datetime-local"
        className="checkout-input"
        min={getMinDateTime()}
        value={deliveryTime}
        onChange={(e) => setDeliveryTime(e.target.value)}
      />

      {error && (
        <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>
      )}

      <button 
        onClick={handleSubmit} 
        className="checkout-button"
        disabled={!cart.length}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default CheckoutPage;
