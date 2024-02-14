import {UserRepository} from "../../domain/repository/user.repository";
import {AuthenticateUserRequestDto} from "../dtos/requests/authenticate-user-request.dto";
import {AuthenticateUserResponseDto} from "../dtos/responses/authenticate-user-response.dto";
import * as jwt from "jsonwebtoken";
import config from "../../../config";
import * as bcrypt from 'bcrypt';

export class AuthenticateUserUseCase {
    constructor(private userRepository: UserRepository) {
    }

    async execute(request: AuthenticateUserRequestDto): Promise<AuthenticateUserResponseDto | null> {
        const user = await this.userRepository.findByEmail(request.email);
        if (!user) {
            return null;
        }
        if (bcrypt.compareSync(request.password, user.password) === false) {
            return null;
        }
        if (!user.isActivated) {
            return null;
        }

        const accessSecretKey = config.keys.jwt.secret;
        const accessToken = jwt.sign({email: user.email}, accessSecretKey, {expiresIn: "1h"});

        return new AuthenticateUserResponseDto(accessToken);
    }

}