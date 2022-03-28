import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/product/entities/product.entity';

@Table
export class Image extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  productId: number;

  // @BelongsTo(() => Product,{onDelete:"CASCADE"})
  @BelongsTo(() => Product)
  product: Product;
}

