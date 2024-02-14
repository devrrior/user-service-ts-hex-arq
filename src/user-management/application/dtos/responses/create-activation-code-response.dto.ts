export class CreateActivationCodeResponseDto {
    private _id: string;
    private _code: string;
    private _userId: string;

    constructor(id: string, code: string, userId: string) {
        this._id = id;
        this._code = code;
        this._userId = userId;
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
}