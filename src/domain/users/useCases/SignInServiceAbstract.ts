import {SignInDto} from "src/application/users/dto/signin.dto";

export abstract class SignInServiceAbstract {
	abstract execute({email, password}: SignInDto): Promise<{name: string, jwtToken: string, email: string}>

}
