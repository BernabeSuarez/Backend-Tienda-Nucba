import { Router } from 'express'
import { createUser, loginUser } from '../controllers/user.controller.js'
import { verifyToken } from '../controllers/verifyToken.js'
import { addProduct, getProducts, updateProducts, deleteProducts } from '../controllers/product.controller.js'
import { addOrder, getOrders } from '../controllers/orders.controller.js'




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
  <h3>Tecnologias usadas:</h3>
  <ul>
  <li>Node Js</li>
  <li>Express (Framework)</li>
  <li>Mongo Db</li>
  <li>Cloudinary</li>
  </ul>
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
router.post('/product', addProduct)
router.get('/products', getProducts)
router.put('/product/:id', updateProducts)
router.delete('/product/:id', deleteProducts)


//Orders Routes

router.post('/order', addOrder)
router.get('/orders', getOrders)


export default router