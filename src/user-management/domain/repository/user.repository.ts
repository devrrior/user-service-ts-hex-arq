import {UserEntity} from "../entity/user.entity";

export interface UserRepository {
    save(user: UserEntity): Promise<UserEntity>;

    findById(id: string): Promise<UserEntity | null>;
}