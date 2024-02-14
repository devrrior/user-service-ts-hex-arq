import {UserRepository} from "../../domain/repository/user.repository";
import {ActivationCodesRepository} from "../../domain/repository/activation-codes.repository";
import {ActivateUserRequestDto} from "../dtos/requests/activate-user-request.dto";
import {ActivateUserResponseDto} from "../dtos/responses/activate-user-response.dto";

export class ActivateUserUseCase {
    constructor(private readonly userRepository: UserRepository, private readonly activationCodesRepository: ActivationCodesRepository) {
    }

    async execute(request: ActivateUserRequestDto): Promise<ActivateUserResponseDto | null> {
        const activationCode = await this.activationCodesRepository.findByCode(request.code);
        if (!activationCode || activationCode._isUsed) {
            return null;
        }

        const user = await this.userRepository.findById(activationCode.userId);
        if (!user) {
            return null;
        }

        const todayDate = new Date();

        user.isActivated = true;
        user.verifiedAt = todayDate;

        await this.userRepository.save(user);

        activationCode.isUsed = true;
        activationCode.usedAt = todayDate;

        await this.activationCodesRepository.save(activationCode);

        const response = new ActivateUserResponseDto(activationCode.userId, user.email, user.isActivated, user.verifiedAt);
        return response;
    }
}