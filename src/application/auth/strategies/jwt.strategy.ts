import {Inject, Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from 'passport-jwt'
import {IJWTPayload} from "src/domain/auth/models/IJWTPayload";
import {IUser} from "src/domain/users/models/IUser";
import {ExtractJWTService} from "../services/ExtractJWTService";
import {ValidateUserService} from "../services/ValidateUserService";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly extractJWTService: ExtractJWTService,
		private readonly validateUserService: ValidateUserService
	) {
		console.log(extractJWTService)
		super({
			jwtFromRequest: extractJWTService.execute,
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_SECRET
		})
	}

	async validate(jwtPayload: IJWTPayload): Promise<IUser> {
		const user = await this.validateUserService.execute(jwtPayload.userId)

		if (!user) {
			throw new UnauthorizedException('User not found')
		}

		return user
	}
}
