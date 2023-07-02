import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(router)



app.listen(3000, () => {
    console.log('Server running')
})