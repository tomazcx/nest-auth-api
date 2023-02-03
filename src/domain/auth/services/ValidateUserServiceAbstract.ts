import {IUser} from "src/domain/users/models/IUser";

export abstract class ValidateUserServiceAbstract {
	abstract execute(userId: string): Promise<IUser>
}
