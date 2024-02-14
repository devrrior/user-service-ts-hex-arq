import {getModelForClass, prop} from "@typegoose/typegoose";

interface ActivationCodeAttributes {
    id: string;
    code: string;
    userId: string;
    isUsed: boolean;
    usedAt: Date | null;
}

export class ActivationCode implements ActivationCodeAttributes {
    @prop({
        required: true,
        unique: true,
    })
    declare id: string;

    @prop({
        required: true,
        unique: true,
    })
    declare code: string;

    @prop({
        required: true,
        unique: true,
    })
    declare userId: string;

    @prop({
        required: true,
    })
    declare isUsed: boolean;

    @prop({
        required: true,
    })
    declare usedAt: Date | null;
}

export const ActivationCodeModel = getModelForClass(ActivationCode);