import {Column, DataType, Model, Table} from "sequelize-typescript";

export interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    cellphone: string;
    email: string;
    password: string;
    isActivated: boolean;
    verifiedAt: Date;
}

@Table({
    tableName: "users",
    modelName: "User",
    timestamps: true,
})
export class UserModel extends Model implements UserAttributes{
    @Column({
        primaryKey: true,
        type: DataType.STRING,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare lastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,

    })
    declare cellphone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare isActivated: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare verifiedAt: Date;
}

export default UserModel;