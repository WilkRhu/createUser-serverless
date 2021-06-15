"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    id: { type: Number, index: true, unique: true },
    name: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
});
exports.user = (mongoose_1.default.models.users || mongoose_1.default.model('user', userSchema));
//# sourceMappingURL=users.js.map