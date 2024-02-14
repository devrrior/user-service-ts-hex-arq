import {UserInterface} from "./interfaces/user.interface";

export class UserEntity implements UserInterface {
    _id: string;
    _firstName: string;
    _lastName: string;
    _cellphone: string;
    _email: string;
    _password: string;
    _isActivated: boolean;
    _verifiedAt: Date | null;

    constructor(id: string, name: string, lastName: string, cellphone: string, email: string, password: string, isActivated: boolean, verifiedAt: Date | null) {
        this._id = id;
        this._firstName = name;
        this._lastName = lastName;
        this._cellphone = cellphone;
        this._email = email;
        this._password = password;
        this._isActivated = isActivated;
        this._verifiedAt = verifiedAt;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get cellphone(): string {
        return this._cellphone;
    }

    set cellphone(value: string) {
        this._cellphone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get isActivated(): boolean {
        return this._isActivated;
    }

    set isActivated(value: boolean) {
        this._isActivated = value;
    }

    get verifiedAt(): Date | null {
        return this._verifiedAt;
    }

    set verifiedAt(value: Date) {
        this._verifiedAt = value;
    }
}