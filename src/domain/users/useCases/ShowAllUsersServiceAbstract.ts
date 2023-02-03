import {IUser} from "../models/IUser";

export abstract class ShowAllUsersServiceAbstract {
	abstract execute(): Promise<IUser[]>
}
