"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.findOne = exports.find = exports.update = exports.create = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const books_1 = require("./controller/books");
const model_1 = require("./model");
const dotenvPath = path_1.default.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv_1.default.config({
    path: dotenvPath,
});
const booksController = new books_1.BooksController(model_1.books);
exports.create = (event, context) => {
    return booksController.create(event, context);
};
exports.update = (event) => booksController.update(event);
exports.find = () => booksController.find();
exports.findOne = (event, context) => {
    return booksController.findOne(event, context);
};
exports.deleteOne = (event) => booksController.deleteOne(event);
//# sourceMappingURL=handler.js.map