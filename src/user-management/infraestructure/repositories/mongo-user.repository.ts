import {UserEntity} from "../../domain/entity/user.entity";
import {UserRepository} from "../../domain/repository/user.repository";
import {User, UserModel} from "../mongo/models/user.model";

export class MongoUserRepository implements UserRepository {
    async save(user: UserEntity): Promise<UserEntity> {
        const updatedUser = await UserModel.findOneAndUpdate({id: user.id}, user, {new: true});

        if (updatedUser) {
            return this.toEntity(updatedUser);
        }

        const newUser = new UserModel(user);

        await newUser.save();

        return this.toEntity(newUser);
    }

    async findById(id: string): Promise<UserEntity | null> {
        const foundUser = await UserModel.findOne({id});

        if (!foundUser) {
            return null;
        }

        return this.toEntity(foundUser);
    }

    async findByEmail(email: string): Promise<UserEntity | null> {
        const foundUser = await UserModel.findOne({email});

        if (!foundUser) {
            return null;
        }

        return this.toEntity(foundUser);
    }

    private toEntity(user: User): UserEntity {
        return new UserEntity(
            user.id,
            user.firstName,
            user.lastName,
            user.cellphone,
            user.email,
            user.password,
            user.isActivated,
            user.verifiedAt,
        );
    }

}