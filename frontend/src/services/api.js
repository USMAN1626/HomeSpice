const BASE_URL = "http://localhost:6969/api";

export const menuAPI = {
  getMenuItems: async () => {
    try {
      const response = await fetch(`${BASE_URL}/menu`);
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to fetch menu items');
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  placeOrder: async (order) => {
    try {
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to place order');
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  getOrders: async () => {
    try {
      const response = await fetch(`${BASE_URL}/orders`);
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to fetch orders');
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  getOrder: async (orderId) => {
    try {
      const response = await fetch(`${BASE_URL}/orders/${orderId}`);
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to fetch order');
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  updateOrder: async (orderId, updateData) => {
    try {
      const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to update order');
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  deleteOrder: async (orderId) => {
    try {
      const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to delete order');
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};
