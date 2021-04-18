import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Order from "../models/OrderModel"
import { isAuth } from '../utils';
const orderRouter = express.Router()

orderRouter.post(
    "/",
    isAuth,

    expressAsyncHandler(async (req, res) => {
        const order = new Order({
            orderItems: req.body.orderItems,
            user: req.user._id,
            shipping: req.body.shipping,
            payment: req.body.payment,
            itmesPrice: req.body.itmesPrice,
            taxPrice: req.body.taxPrice,
            shippigPrice: req.body.shippigPrice,
            totalPrice: req.body.totalPrice,
        })
        const createdOrder = await order.save()
        res.status(201).send({ message: "New Order Created", order: createdOrder })
    }))
export default orderRouter
