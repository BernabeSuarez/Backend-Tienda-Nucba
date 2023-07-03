import { Router } from 'express'
import { createUser, userProfile } from '../controllers/user.controller.js'



const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/signup', createUser)

router.post('/signin', (req, res, next) => {

})

router.get('/profile', userProfile)

export default router