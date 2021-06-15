
import { Context, Handler } from 'aws-lambda';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { UserController } from '../controller/users';
import { user } from '../model/users/users';

const dotenvPath = path.join(__dirname, '../../', `config/.env.${process.env.NODE_ENV}`);

dotenv.config({
    path: dotenvPath,
});

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on('conected', () => {
    console.log('App connected')
})


const userController = new UserController(user);

export const create: Handler = (event: any, context: Context) => {
    return userController.create(event, context);
};
