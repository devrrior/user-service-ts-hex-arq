import {getModelForClass, prop} from "@typegoose/typegoose";

interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    cellphone: string;
    email: string;
    password: string;
    isActivated: boolean;
    verifiedAt: Date;
}

export class User implements UserAttributes {
    @prop({
        required: true,
        unique: true,
    })
    declare id: string;

    @prop({
        required: true,
    })
    declare firstName: string;

    @prop({
        required: true,
    })
    declare lastName: string;

    @prop({
        required: true,
        unique: true,
    })
    declare cellphone: string;

    @prop({
        required: true,
        unique: true,
    })
    declare email: string;

    @prop({
        required: true,
    })
    declare password: string;

    @prop({
        required: true,
    })
    declare isActivated: boolean;

    @prop({
        required: true,
    })
    declare verifiedAt: Date;
}

export const UserModel = getModelForClass(User);