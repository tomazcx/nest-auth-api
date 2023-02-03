import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {IUser} from 'src/domain/users/models/IUser';
import {SignInDto} from '../dto/signin.dto';
import {SignupDto} from '../dto/signup.dto';
import {ShowAllUsersService} from '../services/ShowAllUsersService';
import {SignUpService} from '../services/SignUpService';
import {SignInService} from '../services/SingInService';

@Controller('users')
export class UsersController {

	constructor(
		private readonly signUpService: SignUpService,
		private readonly signInService: SignInService,
		private readonly showAllUsersService: ShowAllUsersService
	) {}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	@HttpCode(HttpStatus.OK)
	public async index(): Promise<IUser[]> {
		return this.showAllUsersService.execute()
	}

	@Post('signup')
	@HttpCode(HttpStatus.CREATED)
	public async signup(@Body() signupDto: SignupDto): Promise<IUser> {
		return this.signUpService.execute(signupDto)
	}


	@Post('signin')
	@HttpCode(HttpStatus.OK)
	public async signin(@Body() signinDto: SignInDto): Promise<{name: string, jwtToken: string, email: string}> {
		return this.signInService.execute(signinDto)
	}

}
