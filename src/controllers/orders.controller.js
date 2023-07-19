import Order from "../models/order.model.js"

export const addOrder = async (req, res, next) => {
    try {

        const { user, cart, price } = req.body
        console.log(req.files)
        const order = new Order({
            user,
            cart,
            price,

        })

        await order.save()
        res.status(200).json(order)

    } catch (error) {
        console.log(error)
    }
}

export const getOrders = async (req, res) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)

    } catch (error) {
        console.log(error)
    }

}
