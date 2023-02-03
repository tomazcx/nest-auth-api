export abstract class CreateAccessTokenServiceAbstract {
	abstract execute(userId: string): Promise<string>
}
