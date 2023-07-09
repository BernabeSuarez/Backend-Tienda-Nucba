import { Router } from 'express'
import { createUser, loginUser, userProfile } from '../controllers/user.controller.js'
import { verifyToken } from '../controllers/verifyToken.js'
import { addProduct, getProducts, updateProducts, deleteProducts } from '../controllers/product.controller.js'
import { getCategories, addCategories } from '../controllers/categories.controller.js'



const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

//User Routes
router.post('/signup', createUser)
router.post('/signin', loginUser)
router.get('/currentUser', verifyToken)


//Products Routes
router.post('/product', addProduct)
router.get('/products', getProducts)
router.put('/product/:id', updateProducts)
router.delete('/product/:id', deleteProducts)

//Categories Routes

router.get('/categories', getCategories)
router.post('/categories', addCategories)

//Orders Routes



export default router