export class ActivateUserRequestDto {
    private _code: string;

    constructor(code: string) {
        this._code = code;
    }

    get code(): string {
        return this._code;
    }
}