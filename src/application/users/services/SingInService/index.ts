import {BadRequestException, Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IUser} from "src/domain/users/models/IUser";
import {SignInDto} from "../../dto/signin.dto";
import * as bcrypt from 'bcrypt'
import {CreateAccessTokenService} from "src/application/auth/services/CreateAcessTokenService";
import {SignInServiceAbstract} from "src/domain/users/useCases/SignInServiceAbstract";

@Injectable()
export class SignInService implements SignInServiceAbstract {

	constructor(
		@InjectModel('User')
		private readonly usersModel: Model<IUser>,
		private readonly createAccessTokenService: CreateAccessTokenService
	) {}

	public async execute({email, password}: SignInDto): Promise<{name: string, jwtToken: string, email: string}> {
		const user = await this.usersModel.findOne({email: email})

		if (!user) {
			throw new BadRequestException('Invalid credentials')
		}

		const match = await bcrypt.compare(password, user.password)

		if (!match) {
			throw new BadRequestException('Invalid credentials')
		}

		const jwtToken = await this.createAccessTokenService.execute(user.id)

		return {name: user.name, jwtToken, email}
	}
}
