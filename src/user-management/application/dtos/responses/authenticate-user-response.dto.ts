export class AuthenticateUserResponseDto {
    private _accessToken: string;
    constructor(accessToken: string) {
        this._accessToken = accessToken;
    }

    get accessToken(): string {
        return this._accessToken;
    }
}