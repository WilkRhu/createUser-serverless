"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(user) {
        this.user = user;
    }
    async createUser(req, res) {
        try {
            const result = await this.user.create(req.body);
            return res.status(200).json(result);
        }
        catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map