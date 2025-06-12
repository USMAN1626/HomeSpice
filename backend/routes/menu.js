import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    console.log("\n=== Retrieved Menu Items ===");
    console.log(`Total Items: ${items.length}`);
    res.json(items);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
