import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IUser} from "src/domain/users/models/IUser";
import {ShowAllUsersServiceAbstract} from "src/domain/users/useCases/ShowAllUsersServiceAbstract";

export class ShowAllUsersService implements ShowAllUsersServiceAbstract {

	constructor(
		@InjectModel('User')
		private readonly usersModel: Model<IUser>
	) {}

	public async execute(): Promise<IUser[]> {
		const users = await this.usersModel.find()
		return users
	}
}
