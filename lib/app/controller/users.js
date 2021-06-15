"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/users/userService");
class UserController extends userService_1.UserService {
    constructor(users) {
        super(users);
    }
    async create(event, context) {
        const body = JSON.parse(event.body);
        try {
            const result = await this.createUser(body);
            return result;
        }
        catch (error) {
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=users.js.map