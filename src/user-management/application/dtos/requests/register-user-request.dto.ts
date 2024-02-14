export class RegisterUserRequestDto {
    private _name: string;
    private _lastName: string;
    private _cellphone: string;
    private _email: string;
    private _password: string;

    constructor(name: string, lastName: string, cellphone: string, email: string, password: string) {
        this._name = name;
        this._lastName = lastName;
        this._cellphone = cellphone;
        this._email = email;
        this._password = password;
    }

    get name(): string {
        return this._name;
    }

    get lastName(): string {
        return this._lastName;
    }

    get cellphone(): string {
        return this._cellphone;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }
}