import { Model } from "mongoose";
import { CreateUserDTO } from "../../model/users/dto/createUserDTO";

export class UserService {
    private user: Model<any>
    constructor(user: Model<any>) {
        this.user = user
    }

    /**
   * Create book
   * @param params
   */
    protected async createUser(params: CreateUserDTO): Promise<object> {
        try {
            const result = await this.user.create({
                name: params.name,
                email: params.name,
                password: params.password
            });
            return result
        } catch (err) {
            throw err.message
        }
    }
}