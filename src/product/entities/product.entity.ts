import { Product_Tag } from './../../tags/entities/product_tag.entity';
import { Brand } from './../../brand/entities/brand.entity';
import { Column, DataType, Table,Model, HasMany, ForeignKey, HasOne, BelongsTo } from "sequelize-typescript";
import { Image } from "src/image/entities/image.entity";
import { Tag } from 'src/tags/entities/tag.entity';
import { Category } from 'src/category/entities/category.entity';

@Table
export class Product extends Model {
    @Column({
        type:DataType.STRING
    })
    name:string

    @Column({
        type:DataType.NUMBER
    })
    skuNumber:number

    @Column({
        type:DataType.STRING
    })
    countryOfOrigin:string

    @Column({
        type:DataType.STRING
    })
    stateOfOrigin:string

    @Column({
        type:DataType.STRING
    })
    description:string

    @Column({
        type:DataType.NUMBER
    })
    userId:number

    @Column({
        type:DataType.STRING
    })
    adv:string

    //brand foregin key
    @ForeignKey(() => Brand)
    @Column({
      type: DataType.STRING,
      allowNull: false
    })
    brandId: number;

    @BelongsTo(()=>Brand)
    brand:Brand

    //has many image
    @HasMany(()=>Image)
    images:Image[]

    // has many tag
    @HasMany(()=>Product_Tag)
    tags:Tag[]

    //has one categorie
    @ForeignKey(()=>Category)
    @Column({
        type: DataType.STRING,
        allowNull: false
      })
      categoryId: number;

    @BelongsTo(()=>Category)
    category:Category
}
