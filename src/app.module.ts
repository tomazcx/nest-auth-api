import {Module} from '@nestjs/common';
import {UsersModule} from './application/users/modules/users.module';
import {AuthModule} from './application/auth/modules/auth.module';
import {UsersController} from './application/users/controllers/users.controller';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
	imports: [AuthModule, UsersModule, MongooseModule.forRoot(process.env.MONGO_URL)],
	controllers: [UsersController],
})
export class AppModule {}
