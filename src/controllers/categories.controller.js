import Category from "../models/categories.model.js"

export const addCategories = async (req, res, next) => {
    try {
        const { section, img } = req.body
        const category = new Category({
            section,
            img
        })
        const saveCategory = await category.save()
        res.status(200).json({ message: "add OK" })

    } catch (error) {
        console.log(error)
    }
}

export const getCategories = async (req, res) => {
    try {
        const allcategories = await Category.find()
        res.status(200).json(allcategories)
    } catch (error) {
        console.log(error)
    }
}