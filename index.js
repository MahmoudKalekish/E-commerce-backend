import express from "express";
import mongoose, { get } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/ErrorHandler.js";
// import Contact from "./Routes/ContactRoutes.js";
import OrderRoute from "./routes/OrdersRoute.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("./public"));

const PORT = process.env.PORT || 7550;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  });

app.use("/api/orders", OrderRoute);



app.use("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page Not Found! Please enter a valid URL to proceed",
  });
});

app.use(errorHandler);
