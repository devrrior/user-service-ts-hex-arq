export class ActivateUserResponseDto {
    private _code: string;
    private _userId: string;
    private _isUsed: boolean;
    private _usedAt: Date;

    constructor(code: string, userId: string, isUsed: boolean, usedAt: Date) {
        this._code = code;
        this._userId = userId;
        this._isUsed = isUsed;
        this._usedAt = usedAt;
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
}