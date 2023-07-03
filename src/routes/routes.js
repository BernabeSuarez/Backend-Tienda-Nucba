import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/signup', createUser)

router.post('/signin', (req, res, next) => {

})

router.get('/profile', (req, res, next) => {
    res.send('Mi Perfil en la aplicacion')
})

export default router