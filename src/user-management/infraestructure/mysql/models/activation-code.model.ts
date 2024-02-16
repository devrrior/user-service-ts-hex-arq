import {Column, DataType, Model, Table} from "sequelize-typescript";

export interface ActivationCodeAttributes {
    id: string;
    code: string;
    userId: string;
    isUsed: boolean;
    usedAt: Date | null
}

@Table({
    tableName: "activation_codes",
    modelName: "ActivationCode",
    timestamps: true,
})
export class ActivationCodeModel extends Model implements ActivationCodeAttributes {
    @Column(
        {
            primaryKey: true,
            type: DataType.STRING,
        }
    )
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare userId: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare isUsed: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare usedAt: Date;
}