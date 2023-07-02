import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/routes.js'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})