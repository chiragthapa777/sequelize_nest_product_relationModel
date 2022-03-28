import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { Tag } from "./tag.entity";

@Table
export class Product_Tag extends Model{
    @ForeignKey(()=>Product)
    @Column({
        type:DataType.NUMBER
    })
    productId:number
    @BelongsTo(() => Product)
    product: Product;

    @ForeignKey(()=>Tag)
    @Column({
        type:DataType.NUMBER
    })
    tagId:number
    @BelongsTo(() => Tag)
    tag: Tag;
}