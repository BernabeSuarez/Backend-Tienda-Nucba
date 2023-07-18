import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/routes/routes.js'
import { connectDB } from './src/config/database.js'
import fileUpload from 'express-fileupload'


dotenv.config()
const PORT = process.env.PORT || 8080
const app = express()
connectDB()

app.use(cors({
    origin: 'http://localhost:5173' //cambiar por direccion de la pagina
}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
}) //soluciona el problema de cors

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));
app.use(router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})