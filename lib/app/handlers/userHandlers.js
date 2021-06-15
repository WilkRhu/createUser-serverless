"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const users_1 = require("../controller/users");
const users_2 = require("../model/users/users");
const dotenvPath = path_1.default.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv_1.default.config({
    path: dotenvPath,
});
const userController = new users_1.UserController(users_2.user);
exports.create = (event, context) => {
    return userController.create(event, context);
};
//# sourceMappingURL=userHandlers.js.map