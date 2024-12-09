import express from 'express';
import userRoutes from './routes/userRouter.js';
const app = express()

app.use(express.json())
app.use('/users', userRoutes)

app.listen(3000, () => {
    console.log("Servidor Rodando na Porta 3000");
})