import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRouter.js';
const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', userRoutes)
app.use('/register', userRoutes)

app.listen(3000, () => {
    console.log("Servidor Rodando na Porta 3000");
})