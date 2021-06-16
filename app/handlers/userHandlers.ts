
import { Context, Handler } from 'aws-lambda';
import mongoose from 'mongoose';
import { UserController } from '../controller/users';
import { user } from '../model/users/users';
import { UsersRepositories } from '../repositories/users';

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
    console.log('App connected')
})

const usersRepositories = new UsersRepositories(user);

const userController = new UserController(usersRepositories);

export const create: Handler = (event: any, context: Context) => {
    return userController.create(event, context);
};

export const getAll: Handler = () => userController.getAll();

export const getUserOne: Handler = (event: any) => userController.getOneUser(event);