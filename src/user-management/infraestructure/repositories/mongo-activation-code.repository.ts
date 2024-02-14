import {ActivationCodeEntity} from "../../domain/entity/activation-code.entity";
import {ActivationCodesRepository} from "../../domain/repository/activation-codes.repository";
import {ActivationCode, ActivationCodeModel} from "../mongo/models/activation-code.model";

export class MongoActivationCodeRepository implements ActivationCodesRepository {
    async save(activationCode: ActivationCodeEntity): Promise<ActivationCodeEntity> {
        const updatedActivationCode = await ActivationCodeModel.findOneAndUpdate(
            {userId: activationCode.userId},
            {
                code: activationCode.code,
                userId: activationCode.userId,
                isUsed: activationCode.isUsed,
                usedAt: activationCode.usedAt,
            },
            {new: true},
        );

        if (updatedActivationCode !== null) {
            return this.toEntity(updatedActivationCode);
        }

        const savedActivationCode = await ActivationCodeModel.create({
            code: activationCode.code,
            userId: activationCode.userId,
            isUsed: activationCode.isUsed,
            usedAt: activationCode.usedAt,
        });

        return this.toEntity(savedActivationCode);
    }

    async findByCode(code: string): Promise<ActivationCodeEntity | null> {
        const foundActivationCode = await ActivationCodeModel.findOne({code});

        if (foundActivationCode === null) {
            return null;
        }

        return this.toEntity(foundActivationCode);
    }

    async findByUserId(userId: string): Promise<ActivationCodeEntity | null> {
        const foundActivationCode = await ActivationCodeModel.findOne({
            userId,
        });

        if (foundActivationCode === null) {
            return null;
        }

        return this.toEntity(foundActivationCode);
    }

    private toEntity(activationCode: ActivationCode): ActivationCodeEntity {
        return new ActivationCodeEntity(
            activationCode.id,
            activationCode.code,
            activationCode.userId,
            activationCode.isUsed,
            activationCode.usedAt,
        );
    }

}