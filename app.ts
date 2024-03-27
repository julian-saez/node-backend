require('dotenv').config();
import express from 'express';
import cors from 'cors';
import router from './src/routes';
import dbConnect from './config/mongo';
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.API_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/', router);
dbConnect();

app.listen(PORT, () => {
    console.log( 'El servidor esta levantado en el puerto:', PORT );
})
