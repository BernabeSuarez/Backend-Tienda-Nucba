import { Router } from 'express'
import { createUser, userProfile } from '../controllers/user.controller.js'
import jwt from 'jsonwebtoken'
import User from "../models/user.model.js" //borrar despues



const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/signup', createUser)

router.post('/signin', (req, res, next) => {

})

router.get('/profile', userProfile)

export default router