import User from "../models/user.model.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = new User({
            name: name,
            email: email,
            password: password
        })
        user.password = await user.encryptPass(user.password) //encripta la contraseña
        const saveUser = await user.save()
        res.status(200).json(saveUser)

    } catch (error) {
        console.log(error)
    }
}