import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';
import { Category_Tag } from './entities/category_tag.entity';

@Module({
  imports:[SequelizeModule.forFeature([Category,Category_Tag])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
