import {ActivationCodesRepository} from "../../domain/repository/activation-codes.repository";
import {CreateActivationCodeRequestDto} from "../dtos/requests/create-activation-code-request.dto";
import {CreateActivationCodeResponseDto} from "../dtos/responses/create-activation-code-response.dto";
import {ActivationCodeEntity} from "../../domain/entity/activation-code.entity";
import {v4 as uuid4} from "uuid";

export class CreateActivationCodeUseCase {
    constructor(private readonly activationCodeRepository: ActivationCodesRepository) {
    }

    async execute(request: CreateActivationCodeRequestDto): Promise<CreateActivationCodeResponseDto | null> {
        const existedActivationCode = await this.activationCodeRepository.findByUserId(request.userId);
        if (existedActivationCode) {
            return null;
        }

        const id = uuid4();
        const code = this.getActivationCode();
        const todayDate = new Date();
        const newActivationCode = new ActivationCodeEntity(
            id,
            code,
            request.userId,
            false,
            todayDate,
        );

        const entity = await this.activationCodeRepository.save(newActivationCode);

        const response = new CreateActivationCodeResponseDto(
            entity.id,
            entity.code,
            entity.userId,
        );

        return response;
    }

    private getActivationCode(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}