import {SignupDto} from "src/application/users/dto/signup.dto";
import {IUser} from "../models/IUser";

export abstract class SingUpServiceAbstract {
	abstract execute({name, email, password, confirmPassword}: SignupDto): Promise<IUser>
}
