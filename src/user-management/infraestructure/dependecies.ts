import {MysqlUserRepository} from "./repositories/mysql-user.repository";
import {MysqlActivationCodeRepository} from "./repositories/mysql-activation-code.repository";
import {UserController} from "./rest-api/controllers/user.controller";
import {RegisterUserUseCase} from "../application/use-cases/register-user.use-case";
import {CreateActivationCodeUseCase} from "../application/use-cases/create-activation-code.use-case";
import {gmailEmailSenderRepository} from "../../shared/infraestructure/dependecies";
import {ActivateUserUseCase} from "../application/use-cases/activate-user.use-case";

const mysqlUserRepository = new MysqlUserRepository();
const mysqlActivationCodeRepository = new MysqlActivationCodeRepository();

const createActivationCodeUseCase = new CreateActivationCodeUseCase(mysqlActivationCodeRepository);
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository, gmailEmailSenderRepository, createActivationCodeUseCase)
const activateUserUseCase = new ActivateUserUseCase(mysqlUserRepository, mysqlActivationCodeRepository);

export const userController = new UserController(registerUserUseCase, activateUserUseCase);