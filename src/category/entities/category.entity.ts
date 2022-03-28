import { Category_Tag } from './category_tag.entity';
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";

@Table
export class Category extends Model {
    @Column({
        type:DataType.STRING,
        unique:true
    })
    name:string

    @Column({
        type:DataType.STRING
    })
    mpath:string

    @Column({
        type:DataType.INTEGER
    })
    parentCategoryId:number

    @Column({
        type:DataType.INTEGER
    })
    userId:number
    

    @HasMany(()=>Product)
    products:Product[]

    @HasMany(()=>Category_Tag)
    tags:Category_Tag[]


}
