import Product from "../models/product.model.js";
import { uploadImage } from "../config/cloudinary.js";

export const addProduct = async (req, res, next) => {
    try {

        const { name, img, section, description, price } = req.body

        const product = new Product({
            name: name,
            img: img,
            section: section,
            description: description,
            price: price
        })
        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            product.img = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }

        }

        const saveProduct = await product.save()
        res.status(200).json({ message: "Product Load OK" })

    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts)

    } catch (error) {
        console.log(error)
    }

}

export const updateProducts = async (req, res) => {
    try {
        const id = req.params.id
        const updateProduct = await Product.findByIdAndUpdate(id, { $set: req.body })
        res.status(200).json({ message: "Product Updated" })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id

        const deleteProduct = await Product.findByIdAndDelete(id)
        res.status(200).json({ message: "Product deleted" })
    } catch (error) {

    }
}