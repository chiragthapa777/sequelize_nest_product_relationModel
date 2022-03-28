import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Category } from "./category.entity";

@Table
export class Category_Tag extends Model{
    @ForeignKey(()=>Category)
    @Column({
        type:DataType.NUMBER
    })
    categoryId:number
    @BelongsTo(() => Category)
    category: Category;

    @ForeignKey(()=>Tag)
    @Column({
        type:DataType.NUMBER
    })
    tagId:number
    @BelongsTo(() => Tag)
    tag: Tag;
}