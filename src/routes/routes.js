import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/users', createUser)


export default router