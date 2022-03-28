import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Brand extends Model {
    @Column({
        type:DataType.STRING
    })
    name:string
    @Column({
        type:DataType.STRING
    })
    country:string
}
