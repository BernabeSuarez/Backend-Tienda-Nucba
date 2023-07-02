import User from "../models/user.model.js"

export const createUser = async (req, res) => {
    try {
        const item = new User(req.body)
        const saveItem = await item.save()
        res.status(200).json(saveItem)
    } catch (error) {
        console.log(error)
    }
}