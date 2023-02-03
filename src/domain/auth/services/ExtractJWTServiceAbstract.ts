import {Request} from "express";

export abstract class ExtractJWTServiceAbstract {
	abstract execute(request: Request): string
}
