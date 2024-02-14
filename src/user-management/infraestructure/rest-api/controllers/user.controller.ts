import {RegisterUserUseCase} from "../../../application/use-cases/register-user.use-case";
import {ActivateUserUseCase} from "../../../application/use-cases/activate-user.use-case";
import {Request, Response} from "express";
import {RegisterUserRequestDto} from "../../../application/dtos/requests/register-user-request.dto";
import {ActivateUserRequestDto} from "../../../application/dtos/requests/activate-user-request.dto";

export class UserController {
    constructor(private readonly registerUserUseCase: RegisterUserUseCase, private readonly activateUserUseCase: ActivateUserUseCase) {
    }

    async registerUser(req: Request, res: Response) {
        const {firstName, lastName, cellphone, email, password} = req.body;
        const registerUserRequest = new RegisterUserRequestDto(firstName, lastName, cellphone, email, password);
        const user = await this.registerUserUseCase.execute(registerUserRequest);

        return res.status(201).json(user);
    }

    async activateUser(req: Request, res: Response) {
        const {activationCode} = req.params;

        const activateUserRequest = new ActivateUserRequestDto(activationCode);
        const user = await this.activateUserUseCase.execute(activateUserRequest);

        return res.status(200).json(user);
    }
}