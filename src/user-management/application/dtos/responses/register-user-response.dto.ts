export class RegisterUserResponseDto {
    private _id: string;
    private _name: string;
    private _lastName: string;
    private _cellphone: string;
    private _email: string;
    private _isActivated: boolean;
    private _verifiedAt: Date | null;

    constructor(id: string, name: string, lastName: string, cellphone: string, email: string, isActivated: boolean, verifiedAt: Date | null) {
        this._id = id;
        this._name = name;
        this._lastName = lastName;
        this._cellphone = cellphone;
        this._email = email;
        this._isActivated = isActivated;
        this._verifiedAt = verifiedAt;
    }

    get id(): string {
        return this._id;
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

    get isActivated(): boolean {
        return this._isActivated;
    }

    get verifiedAt(): Date | null {
        return this._verifiedAt;
    }
}