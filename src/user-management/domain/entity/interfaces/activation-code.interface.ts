export interface ActivationCodeInterface {
    _id: string;
    _code: string;
    _userId: string;
    _isUsed: boolean;
    _usedAt: Date | null;
}