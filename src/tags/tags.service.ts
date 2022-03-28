import { where } from 'sequelize/types';
import { Product_Tag } from './entities/product_tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag) private tagModel: typeof Tag,@InjectModel(Product_Tag) private productTagModel: typeof Product_Tag){}
  async create(createTagDto) {
    return await this.tagModel.create(createTagDto);
  }

  async findAll() {
    return await this.tagModel.findAll({include:["products","categories"]});
  }

  //add many to many to product_tag
  async addTags(productId,tagId){
    return await this.productTagModel.create({
      productId,
      tagId
    })
  }
   async removeTags(productId,tagId){
     return await this.productTagModel.destroy({where:{productId,tagId}})
   }

  async findOne(id: number){
    return this.tagModel.findByPk(id) ;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return await this.tagModel.update(updateTagDto,{where:{
      id
    }});
  }

  async remove(id: number) {
    return await this.tagModel.destroy({where:{id}});
  }
}
