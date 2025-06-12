import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import menuRoutes from "./routes/menu.js";
import orderRoutes from "./routes/orders.js";

dotenv.config();

const app = express();
const PORT = 6969;

app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true
}));
app.use(express.json());

console.log('Attempting to connect to MongoDB...');
console.log('MongoDB URL:', process.env.MONGO_URL); 

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" MongoDB connected successfully");
    console.log("Database Name:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error(" MongoDB connection error:");
    console.error(err);
  });

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
