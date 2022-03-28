import { Product_Tag } from './entities/product_tag.entity';
import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from './entities/tag.entity';

@Module({
  imports:[SequelizeModule.forFeature([Tag,Product_Tag])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
