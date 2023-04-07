import { Router } from "express";
import { getOrder, createOrder, updateOrder, deleteOrder} from "../controllers/OrdersController.js";


const OrderRoute = Router();


OrderRoute.get("/", getOrder);

OrderRoute.post("/", createOrder);

OrderRoute.put("/:id", updateOrder);

OrderRoute.delete("/:id",deleteOrder);


export default OrderRoute;
