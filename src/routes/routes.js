import { Router } from 'express'
import { createUser, loginUser, userProfile } from '../controllers/user.controller.js'
import User from "../models/user.model.js" //borrar luego



const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/signup', createUser)

router.post('/signin', loginUser)

router.get('/profile', userProfile)

export default router