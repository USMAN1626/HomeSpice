import mongoose from "mongoose";
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  serves: {
    type: Number,
    required: true,
    min: 1,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
