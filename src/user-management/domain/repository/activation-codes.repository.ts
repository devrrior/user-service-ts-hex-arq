import {ActivationCodeEntity} from "../entity/activation-code.entity";

export interface ActivationCodesRepository {
    save(activationCode: ActivationCodeEntity): Promise<ActivationCodeEntity>;

    findByCode(code: string): Promise<ActivationCodeEntity | null>;

    findByUserId(userId: string): Promise<ActivationCodeEntity | null>;
};