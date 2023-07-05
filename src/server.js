import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/routes.js'
import { connectDB } from './config/database.js'

dotenv.config()
const PORT = process.env.PORT || 3001
const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})