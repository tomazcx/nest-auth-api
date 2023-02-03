import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IUser} from "src/domain/users/models/IUser";
import {SingUpServiceAbstract} from "src/domain/users/useCases/SignUpServiceAbstract";
import {SignupDto} from "../../dto/signup.dto";

@Injectable()
export class SignUpService implements SingUpServiceAbstract {

	constructor(
		@InjectModel('User')
		private readonly usersModel: Model<IUser>
	) {}

	public async execute({name, email, password, confirmPassword}: SignupDto): Promise<IUser> {

		if (password !== confirmPassword || (!password || !confirmPassword)) {
			throw new BadRequestException('Missing fields')
		}

		const user = new this.usersModel({name, email, password})
		return user.save()
	}
}
