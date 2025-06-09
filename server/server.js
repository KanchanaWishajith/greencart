import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import connectDB from './configs/db.js';
import 'dotenv/config.js';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';

const app = express();
const PORT = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

//allow multiple origins
const allowedOrigins = ['http://localhost:5173']

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, Credentials: true}));



app.get('/', (req, res) => 
    res.send('Api is running!'));
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});