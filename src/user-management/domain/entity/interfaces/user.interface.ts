export interface UserInterface {
    _id: string;
    _firstName: string
    _lastName: string
    _cellphone: string;
    _email: string;
    _password: string
    _isActivated: boolean;
    _verifiedAt: Date | null;
}