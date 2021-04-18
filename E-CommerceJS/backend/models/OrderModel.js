import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                name: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                qty: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                    required: true
                }
            }
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        shipping: {
            address: String,
            city: String,
            PostalCode: String,
            country: String,
        },
        payment: {
            paymentMethod: String,
            paymentResult: {
                orderID: String,
                payerID: String,
                paymentID: String,
            },
        },
        itemPrice: Number,
        taxPrice: Number,
        shippingPrice: Number,
        totalPrice: Number,
        isPaid: { type: Boolean, required: true, default: false },
        PaidAt: Date,
        isDelivered: { type: Boolean, required: true, default: false },
        deliveredAt: Date,

    }, {
    //this for the time will created once there is new order or update
    timestamps: true
}
)

const Order = mongoose.model("Order", orderSchema)
export default Order
