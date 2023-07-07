import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    section: String,
    img: String
})

const Category = mongoose.model('category', categorySchema)

export default Category