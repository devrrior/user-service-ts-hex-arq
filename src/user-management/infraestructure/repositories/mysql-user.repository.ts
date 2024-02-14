import {UserEntity} from "../../domain/entity/user.entity";
import {UserRepository} from "../../domain/repository/user.repository";
import {UserAttributes, UserModel} from "../mysql/models/user.model";

export class MysqlUserRepository implements UserRepository {
    async save(user: UserEntity): Promise<UserEntity> {
        const foundUser = await UserModel.findOne({where: {id: user.id}});

        if (foundUser !== null) {
            await foundUser.update({
                firstName: user.firstName,
                lastName: user.lastName,
                cellphone: user.cellphone,
                email: user.email,
                password: user.password,
                isActivated: user.isActivated,
                verifiedAt: user.verifiedAt,
            });
            return this.toEntity(foundUser.get());
        }

        const savedUser = await UserModel.create({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            cellphone: user.cellphone,
            email: user.email,
            password: user.password,
            isActivated: user.isActivated,
            verifiedAt: user.verifiedAt,
        });


        return this.toEntity(savedUser.get());
    }

    async findById(id: string): Promise<UserEntity | null> {
        const foundUser = await UserModel.findOne({where: {id}});

        if (foundUser === null) {
            return null;
        }

        return this.toEntity(foundUser.get());
    }

    private toEntity(user: UserAttributes): UserEntity {
        return new UserEntity(
            user.id,
            user.firstName,
            user.lastName,
            user.cellphone,
            user.email,
            user.password,
            user.isActivated,
            user.verifiedAt
        );
    }

}