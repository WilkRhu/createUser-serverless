import { Context } from "aws-lambda";
import { CreateUserDTO } from "../model/users/dto/createUserDTO";
import { UsersRepositories } from "../repositories/users";
import { MessageUtil } from "../utils/message";

export class UserController {
    constructor(
        private usersRepositories: UsersRepositories
    ) {
        this.usersRepositories = usersRepositories
    }


    /**
  * Create users
  * @param {*} event
  */
    async create(event: any, context?: Context): Promise<Object> {
        console.log('functionName', context.functionName);
        const params: CreateUserDTO = JSON.parse(event.body);
        try {
            const result = await this.usersRepositories.createUser(params)
            return MessageUtil.create(result)
        } catch (err) {
            return MessageUtil.error(err.code, err.message);
        }
    }

    /**
     * Get User All
     */

    async getAll(): Promise<object> {
        try {
            const users = await this.usersRepositories.getUserAll();
            return MessageUtil.success(users)
        } catch (error) {
            return MessageUtil.error(error.code, error.message)
        }
    }

    /**
     * Get user one
     * @param event
     */
    async getOneUser(event: any): Promise<object> {
        try {
            const id: string = String(event.pathParameters.id)
            const user = await this.usersRepositories.getUser(id)
            return MessageUtil.success(user)
        } catch (error) {
            return MessageUtil.error(error.code, error.message)
        }
    }
}