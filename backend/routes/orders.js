import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    console.log("\n=== Retrieved Orders ===");
    console.log(`Total Orders: ${orders.length}`);
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    console.error("Error fetching order:", err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("\n=== Incoming Order Request ===");
    console.log("Request Body:", JSON.stringify(req.body, null, 2));

    const { items, total, address, deliveryTime } = req.body;

    if (!items?.length) {
      throw new Error("Items array is required and must not be empty");
    }

    if (!total || total <= 0) {
      throw new Error("Valid total amount is required");
    }

    if (!address?.trim()) {
      throw new Error("Delivery address is required");
    }

    if (!deliveryTime) {
      throw new Error("Delivery time is required");
    }

    const order = new Order({
      items,
      total,
      address,
      deliveryTime,
    });

    const savedOrder = await order.save();

    console.log("\n=== Order Saved Successfully ===");
    console.log("Order ID:", savedOrder._id);
    console.log("Total Amount:", savedOrder.total);
    console.log("Delivery Time:", savedOrder.deliveryTime);

    res.status(201).json(savedOrder);
  } catch (err) {
    console.error("\n Order Creation Failed ");
    console.error("Error:", err.message);
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log("\n=== Update Order Request ===");
    console.log("Order ID:", req.params.id);
    console.log("Update Data:", JSON.stringify(req.body, null, 2));

    const existingOrder = await Order.findById(req.params.id);
    if (!existingOrder) {
      console.log("Order not found");
      return res.status(404).json({ message: "Order not found" });
    }

    const { items, total, address, deliveryTime } = req.body;

    if (items && !items.length) {
      throw new Error("Items array must not be empty");
    }

    if (total && total <= 0) {
      throw new Error("Total amount must be greater than 0");
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        items: items || existingOrder.items,
        total: total || existingOrder.total,
        address: address || existingOrder.address,
        deliveryTime: deliveryTime || existingOrder.deliveryTime,
      },
      { new: true, runValidators: true }
    );

    console.log("\n=== Order Updated Successfully ===");
    console.log("Updated Order:", JSON.stringify(updatedOrder, null, 2));

    res.json(updatedOrder);
  } catch (err) {
    console.error("\n Order Update Failed  ");
    console.error("Error:", err.message);
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("\n=== Delete Order Request ===");
    console.log("Order ID:", req.params.id);

    const order = await Order.findById(req.params.id);
    if (!order) {
      console.log(" Order not found");
      return res.status(404).json({ message: "Order not found" });
    }

    await Order.findByIdAndDelete(req.params.id);
    console.log(" Order deleted successfully");

    res.json({
      message: "Order deleted successfully",
      deletedOrderId: req.params.id,
    });
  } catch (err) {
    console.error("\n Order Deletion Failed ");
    console.error("Error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

export default router;
