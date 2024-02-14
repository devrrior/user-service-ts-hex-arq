import {ActivationCodeEntity} from "../../domain/entity/activation-code.entity";
import {ActivationCodeAttributes, ActivationCodeModel} from "../mysql/models/activation-code.model";
import {ActivationCodesRepository} from "../../domain/repository/activation-codes.repository";

export class MysqlActivationCodeRepository implements ActivationCodesRepository {

    async save(activationCode: ActivationCodeEntity): Promise<ActivationCodeEntity> {
        const foundActivationCode = await ActivationCodeModel.findOne({where: {userId: activationCode.userId}});

        if (foundActivationCode !== null) {
            await foundActivationCode.update({
                code: activationCode.code,
                isUsed: activationCode.isUsed,
                usedAt: activationCode.usedAt,
            });
            return this.toEntity(foundActivationCode.get());
        }

        const savedActivationCode = await ActivationCodeModel.create({
            id: activationCode.id,
            code: activationCode.code,
            userId: activationCode.userId,
            isUsed: activationCode.isUsed,
            usedAt: activationCode.usedAt,
        });

        return this.toEntity(savedActivationCode.get());
    }

    async findByCode(code: string): Promise<ActivationCodeEntity | null> {
        const activationCode = await ActivationCodeModel.findOne({
            where: {
                code,
            },
        });
        if (activationCode === null) {
            return null;
        }
        return this.toEntity(activationCode.get());
    }

    async findByUserId(userId: string): Promise<ActivationCodeEntity | null> {
        const activationCode = await ActivationCodeModel.findOne({
            where: {
                userId,
            },
        });
        if (activationCode === null) {
            return null;
        }
        return this.toEntity(activationCode.get());
    }

    private toEntity(activationCodeModel: ActivationCodeAttributes): ActivationCodeEntity {
        return new ActivationCodeEntity(
            activationCodeModel.id,
            activationCodeModel.code,
            activationCodeModel.userId,
            activationCodeModel.isUsed,
            activationCodeModel.usedAt,
        );
    }
}