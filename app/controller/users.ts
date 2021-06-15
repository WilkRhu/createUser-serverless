import { Context } from "aws-lambda";
import { Model } from "mongoose";
import { CreateUserDTO } from "../model/users/dto/createUserDTO";
import { UserService } from "../service/users/userService";
import { MessageUtil } from "../utils/message";

export class UserController extends UserService {
    constructor(users: Model<any>) {
        super(users);
    }


    /**
  * Create users
  * @param {*} event
  */
    async create(event: any, context?: Context): Promise<Object> {
        console.log('functionName', context.functionName);
        const params: CreateUserDTO = JSON.parse(event.body);
        try {
            const result = await this.createUser(params)
            return MessageUtil.success(result)
        } catch (err) {
            return MessageUtil.error(err.code, err.message);
        }
    }
}