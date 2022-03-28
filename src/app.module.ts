import { Category_Tag } from './category/entities/category_tag.entity';
import { Product_Tag } from './tags/entities/product_tag.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TagsModule } from './tags/tags.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product/entities/product.entity';
import { Image } from './image/entities/image.entity';
import { Brand } from './brand/entities/brand.entity';
import { Tag } from './tags/entities/tag.entity';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'chirag',
      database: 'day5',
      models: [Product,Image,Brand,Tag,Product_Tag,Category,Category_Tag],
    }),
    ProductModule,
    ImageModule,
    CategoryModule,
    BrandModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
