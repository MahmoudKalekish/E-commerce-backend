import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a firstName field" ],
    },
    lastName: {
      type: String,
      required: [true, "Please enter a lastName field "],
    },
    email: {
      type: String,
      required: [true, "Please enter an email field "],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please enter a phoneNumber field "],
    },
    city: {
      type: String,
      required: [true, "Please enter a city field "],
    },
    address: {
      type: String,
      required: [true, "Please enter an address field "],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
