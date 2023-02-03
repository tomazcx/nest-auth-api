import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from 'src/application/auth/modules/auth.module';
import {UsersSchema} from 'src/infra/db/schemas/users.schema';
import {ShowAllUsersService} from '../services/ShowAllUsersService';
import {SignUpService} from '../services/SignUpService';
import {SignInService} from '../services/SingInService';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'User',
				schema: UsersSchema
			}
		]),
		AuthModule
	],
	providers: [SignUpService, SignInService, ShowAllUsersService],
	exports: [SignInService, SignUpService, ShowAllUsersService]

})
export class UsersModule {}
