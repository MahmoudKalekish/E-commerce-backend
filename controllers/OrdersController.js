import asyncHandler from "express-async-handler"
import Order from "../models/OrdersModel.js";
export const getOrder = asyncHandler ( async (req, res) => {

    const orders = await Order.find()
  res.status(200).json(orders);
} 
)

//hello world

export const createOrder = asyncHandler(async (req, res) => {

  try {
    const order = await Order.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      city: req.body.city,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
    });
    res.status(200).json(order);
  }  catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send({error: error.message});
    } else {
      res.status(500).send({ error: 'Internal server error' });
    }
}
}
)

export const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  if(!order){
    res.status(400)
    throw new Error("Order not found")

  }
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedOrder);
}
)
export const deleteOrder = asyncHandler (async (req, res) => {
 const order = await Order.findById(req.params.id)
 if(!order){
    res.status(400)
    throw new Error("Order not found")
 }
 const deletedOrder = await Order.findByIdAndRemove(req.params.id)
   res.status(200).json(`id:${req.params.id}`);
 
}
)
