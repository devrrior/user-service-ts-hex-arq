export class CreateActivationCodeRequestDto {
    private _userId: string;

    constructor(userId: string) {
        this._userId = userId;
    }

    get userId(): string {
        return this._userId;
    }
}