
import { Category_Tag } from './../../category/entities/category_tag.entity';
import { Product_Tag } from './product_tag.entity';
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";

@Table
export class Tag extends Model {
    @Column({
        type:DataType.STRING,
        unique:true
    })
    name:string

    @Column({
        type:DataType.NUMBER
    })
    userId:number

    @HasMany(()=>Product_Tag)
    products:Product[]

    @HasMany(()=>Category_Tag)
    categories:Category_Tag[]

}
