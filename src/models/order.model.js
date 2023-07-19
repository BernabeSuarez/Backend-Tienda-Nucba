import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user: { type: Object, required: true },
    cart: { type: Array, required: true },
    price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
})

const Order = mongoose.model('Order', orderSchema)

export default Order