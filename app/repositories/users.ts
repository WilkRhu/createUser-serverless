import { Model } from "mongoose";
import { CreateUserDTO } from "../model/users/dto/createUserDTO";

export class UsersRepositories {
    private user: Model<any>
    constructor(user: Model<any>) {
        this.user = user
    }

    public async getUserAll(): Promise<object> {
        return await this.user.find();
    }

    public async getUser(id): Promise<object> {
        return await this.user.findById({ _id: id })
    }

    public async createUser(data: CreateUserDTO): Promise<object> {
        return await this.user.create({
            name: data.name,
            email: data.name,
            password: data.password
        });
    }

    public async updateUser(id, data: CreateUserDTO): Promise<object> {
        return await this.user.updateOne({ _id: id }, data, { runValidators: true });
    }

    public async deleteUser(id): Promise<any> {
        return await this.user.deleteOne({ _id: id });
    }
}