import {ActivationCodeInterface} from "./interfaces/activation-code.interface";

export class ActivationCodeEntity implements ActivationCodeInterface {
    _id: string;
    _code: string;
    _userId: string;
    _isUsed: boolean;
    _usedAt: Date;


    constructor(id: string, code: string, userId: string, isUsed: boolean, usedAt: Date) {
        this._id = id;
        this._code = code;
        this._userId = userId;
        this._isUsed = isUsed;
        this._usedAt = usedAt;
    }

    get id(): string {
        return this._id;
    }

    get code(): string {
        return this._code;
    }

    get userId(): string {
        return this._userId;
    }

    get isUsed(): boolean {
        return this._isUsed;
    }

    get usedAt(): Date {
        return this._usedAt;
    }

    set isUsed(value: boolean) {
        this._isUsed = value;
    }

    set usedAt(value: Date) {
        this._usedAt = value;
    }
}