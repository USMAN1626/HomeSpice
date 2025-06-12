import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
 
  items: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  
  total: {
    type: Number,
    required: true,
    min: 0
  },
  

  address: {
    type: String,
    required: true,
    trim: true
  },
  
  deliveryTime: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
