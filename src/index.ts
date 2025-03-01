import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { initializeDatabase } from './config/database';
import userRouter from './controllers/user.controller';
import { errorHandler } from './middleware/error.middleware';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use(errorHandler);

const port = process.env.PORT || 4000;

initializeDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Server startup error:', error);
        process.exit(1);
    });