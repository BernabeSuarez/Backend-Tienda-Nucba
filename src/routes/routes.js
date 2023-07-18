import { Router } from 'express'
import { createUser, loginUser, userProfile } from '../controllers/user.controller.js'
import { verifyToken } from '../controllers/verifyToken.js'
import { addProduct, getProducts, updateProducts, deleteProducts } from '../controllers/product.controller.js'
import { getCategories, addCategories } from '../controllers/categories.controller.js'
import multer from 'multer'




const upload = multer({ dest: 'uploads/' })



const router = Router()

router.get('/', (req, res) => {
  const htmlresponse = `
<html lang="en">

<head>
  <title>Backend Tienda Nucba</title>
</head>
<body>
  <h1>Backend Tienda Nucba</h1>
  <h2>Proyecto integrador backend</h2>
</body>

</html>
    `
  res.send(htmlresponse)
})

//User Routes
router.post('/signup', createUser)
router.post('/signin', loginUser)
router.get('/checktoken', verifyToken)


//Products Routes
router.post('/product', upload.single('ProductImage'), addProduct)
router.get('/products', getProducts)
router.put('/product/:id', updateProducts)
router.delete('/product/:id', deleteProducts)

//Categories Routes

router.get('/categories', getCategories)
router.post('/categories', addCategories)

//Orders Routes



export default router