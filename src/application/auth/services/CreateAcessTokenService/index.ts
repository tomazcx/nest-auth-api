import {sign} from 'jsonwebtoken'
import {CreateAccessTokenServiceAbstract} from 'src/domain/auth/services/CreateAccessTokenServiceAbstract'


export class CreateAccessTokenService implements CreateAccessTokenServiceAbstract {

	public async execute(userId: string): Promise<string> {
		return sign({userId}, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRATION
		})
	}

}
