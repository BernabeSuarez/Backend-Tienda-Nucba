import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'



export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = new User({
            name: name,
            email: email,
            password: password
        })
        user.password = await user.encryptPass(user.password) //encripta la contraseña
        const saveUser = await user.save() // guarda en la db mongoose

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: 60 * 60 * 24
        }) //crear un token unico por cada usuario, expiresIn determina cuando se vencera ese token
        res.status(200).json({ auth: true, token })

    } catch (error) {
        console.log(error)
    }
}

export const userProfile = async (req, res, next) => {

    const user = await User.findById(req.userId, { password: 0 })
    if (!user) {
        return res.status(404).send('No user found')
    }
    const id = req.params.id
    res.json(user)
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(404).send("El email no existe")
    }
    const validPass = await user.validatePass(password)
    if (!validPass) {
        return res.status(401).json({ auth: false, token: null })
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 30   //tiempo que tiene validez el token
    })
    res.status(200).json({ auth: true, token })
}