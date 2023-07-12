import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    img: String,
    section: String,
    description: String,
    price: Number
})

const Product = mongoose.model('Product', productSchema)

export default Product