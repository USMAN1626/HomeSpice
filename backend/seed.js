import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "./models/MenuItem.js";
dotenv.config();

const menuItems = [
  {
    name: "Chicken Biryani",
    image: "/assets/biryani.jpg",
    price: 300,
    serves: 3,
  },
  {
    name: "Kheer",
    image: "/assets/kheer.png",
    price: 150,
    serves: 1,
  },
  {
    name: "Chocolate Paratha",
    image: "/assets/paratha.jpeg",
    price: 250,
    serves: 2,
  },
];

console.log("Connecting to MongoDB...");
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");

    await MenuItem.deleteMany({});
    console.log("Cleared existing menu items");

    const insertedItems = await MenuItem.insertMany(menuItems);
    console.log("Seeded menu items:", insertedItems);

    console.log("Seeding completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    process.exit(1);
  });
