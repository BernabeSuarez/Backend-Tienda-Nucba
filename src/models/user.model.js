import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// Encriptar la contraseña para guardarla

userSchema.methods.encryptPass = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

const User = mongoose.model('User', userSchema);

export default User