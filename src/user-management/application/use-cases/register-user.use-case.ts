import {RegisterUserRequestDto} from "../dtos/requests/register-user-request.dto";
import {RegisterUserResponseDto} from "../dtos/responses/register-user-response.dto";
import {UserRepository} from "../../domain/repository/user.repository";
import {UserEntity} from "../../domain/entity/user.entity";
import {v4 as uuidv4} from 'uuid';
import * as bcrypt from 'bcrypt';
import {EmailSenderRepository} from "../../../shared/domain/repositories/email-sender.repository";
import {CreateActivationCodeUseCase} from "./create-activation-code.use-case";
import {CreateActivationCodeRequestDto} from "../dtos/requests/create-activation-code-request.dto";

export class RegisterUserUseCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly emailSenderRepository: EmailSenderRepository,
        private readonly createActivationCodeUseCase: CreateActivationCodeUseCase
    ) {
    }

    async execute(request: RegisterUserRequestDto): Promise<RegisterUserResponseDto> {
        const uuid = uuidv4();
        const todayDate = new Date();
        const hashedPassword = bcrypt.hashSync(request.password, 10);

        const user = new UserEntity(
            uuid,
            request.name,
            request.lastName,
            request.cellphone,
            request.email,
            hashedPassword,
            false,
            null,
        );

        const entity = await this.userRepository.save(user);
        const createActivationCodeRequest = new CreateActivationCodeRequestDto(entity.id);
        const activationCode = await this.createActivationCodeUseCase.execute(createActivationCodeRequest);

        if (activationCode) {
            await this.emailSenderRepository.sendEmail(
                entity.email,
                'Welcome to our platform',
                `Welcome to our platform, to activate your account please click on the following link: http://localhost:3000/users/activate/${activationCode.code}`
            );
        }

        const response = new RegisterUserResponseDto(
            entity.id,
            entity.firstName,
            entity.lastName,
            entity.cellphone,
            entity.email,
            entity.isActivated,
            entity.verifiedAt
        );

        return response;
    }

    private getActivationCode(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}