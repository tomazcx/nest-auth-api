import {BadRequestException} from "@nestjs/common";
import {Request} from "express";
import {ExtractJWTServiceAbstract} from "src/domain/auth/services/ExtractJWTServiceAbstract";

export class ExtractJWTService implements ExtractJWTServiceAbstract {

	public execute(request: Request): string {
		const bearerToken = request.headers.authorization

		if (!bearerToken) {
			throw new BadRequestException('Bad request')
		}

		const token = bearerToken.split(' ')[1]

		return token
	}

}
