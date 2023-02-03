import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {MongooseModule} from '@nestjs/mongoose';
import {PassportModule} from '@nestjs/passport';
import {UsersSchema} from 'src/infra/db/schemas/users.schema';
import {CreateAccessTokenService} from '../services/CreateAcessTokenService';
import {ExtractJWTService} from '../services/ExtractJWTService';
import {ValidateUserService} from '../services/ValidateUserService';
import {JwtStrategy} from '../strategies/jwt.strategy';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'User',
				schema: UsersSchema
			}
		]),
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: process.env.JWT_EXPIRATION
			}
		})
	],
	providers: [ExtractJWTService, ValidateUserService, CreateAccessTokenService, JwtStrategy],
	exports: [ExtractJWTService, ValidateUserService, CreateAccessTokenService],


})
export class AuthModule {}
