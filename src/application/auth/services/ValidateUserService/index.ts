import {Injectable, UnauthorizedException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ValidateUserServiceAbstract} from "src/domain/auth/services/ValidateUserServiceAbstract";
import {IUser} from "src/domain/users/models/IUser";

@Injectable()
export class ValidateUserService implements ValidateUserServiceAbstract {

	@InjectModel('User')
	private usersModel: Model<IUser>

	public async execute(userId: string): Promise<IUser> {
		const user = await this.usersModel.findOne({_id: userId})

		if (!user) {
			throw new UnauthorizedException('User not found')
		}

		return user
	}

}
