import { Router } from 'express'
import { createUser, loginUser, userProfile } from '../controllers/user.controller.js'
import { verifyToken } from '../controllers/verifyToken.js'



const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/signup', createUser)

router.post('/signin', loginUser)

router.get('/profile', verifyToken, userProfile)

export default router