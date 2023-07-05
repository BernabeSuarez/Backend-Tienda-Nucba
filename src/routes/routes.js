import { Router } from 'express'
import { createUser, loginUser, userProfile } from '../controllers/user.controller.js'
import { verifyToken } from '../controllers/verifyToken.js'
import { addProduct, getProducts, updateProducts, deleteProducts } from '../controllers/product.controller.js'



const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/signup', createUser)
router.post('/signin', loginUser)
router.get('/profile/:id', verifyToken, userProfile)
router.post('/product', addProduct)
router.get('/products', getProducts)
router.put('/product/:id', updateProducts)
router.delete('/product/:id', deleteProducts)




export default router