import React, { useState, useEffect } from 'react';
import { menuAPI } from '../services/api';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);
  const [editForm, setEditForm] = useState({
    address: '',
    deliveryTime: ''
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await menuAPI.getOrders();
      setOrders(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch orders');
      setLoading(false);
    }
  };

  const handleDelete = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await menuAPI.deleteOrder(orderId);
        setOrders(orders.filter(order => order._id !== orderId));
      } catch (err) {
        setError('Failed to delete order');
      }
    }
  };


  const handleEdit = (order) => {
    setEditingOrder(order);
    setEditForm({
      address: order.address,
      deliveryTime: order.deliveryTime
    });
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedOrder = await menuAPI.updateOrder(editingOrder._id, editForm);
      setOrders(orders.map(order => 
        order._id === editingOrder._id ? updatedOrder : order
      ));
      setEditingOrder(null);
    } catch (err) {
      setError('Failed to update order');
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders Management</h1>
      
      {/* Edit Form */}
      {editingOrder && (
        <div className="mb-4 p-4 border rounded">
          <h2 className="text-xl mb-2">Edit Order</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label className="block">Delivery Address:</label>
              <input
                type="text"
                value={editForm.address}
                onChange={(e) => setEditForm({...editForm, address: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">Delivery Time:</label>
              <input
                type="datetime-local"
                value={editForm.deliveryTime}
                onChange={(e) => setEditForm({...editForm, deliveryTime: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update Order
              </button>
              <button
                type="button"
                onClick={() => setEditingOrder(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-4">
        {orders.map(order => (
          <div key={order._id} className="border p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Order ID: {order._id}</h3>
                <p>Delivery Address: {order.address}</p>
                <p>Delivery Time: {new Date(order.deliveryTime).toLocaleString()}</p>
                <p>Total: Rs {order.total}</p>
                <div className="mt-2">
                  <strong>Items:</strong>
                  <ul className="list-disc ml-4">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} x {item.quantity} - Rs {item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(order)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage; 