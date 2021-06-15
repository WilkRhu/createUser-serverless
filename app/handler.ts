
import { Context, Handler } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
import { BooksController } from './controller/books';
import { books } from './model';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);

dotenv.config({
  path: dotenvPath,
});

const booksController = new BooksController(books);

export const create: Handler = (event: any, context: Context) => {
  return booksController.create(event, context);
};

export const update: Handler = (event: any) => booksController.update(event);

export const find: Handler = () => booksController.find();

export const findOne: Handler = (event: any, context: Context) => {
  return booksController.findOne(event, context);
};

export const deleteOne: Handler = (event: any) => booksController.deleteOne(event);
