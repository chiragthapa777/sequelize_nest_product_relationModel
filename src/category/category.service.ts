import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Category_Tag } from './entities/category_tag.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryModel: typeof Category,
    @InjectModel(Category_Tag) private catTagModel: typeof Category_Tag,
  ) {}
  async create(createCategoryDto) {
    return await this.categoryModel.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoryModel.findAll({include:["tags"]});
  }

  async findOne(id: number) {
    return await this.categoryModel.findByPk(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryModel.update(updateCategoryDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.categoryModel.destroy({
      where: {
        id,
      },
    });
  }

  async addCatTag(categoryId: number, tagId: number) {
    return await this.catTagModel.create({categoryId,tagId})
  }
  async removeCatTag(id:number) {
    return await this.catTagModel.destroy({where:{
      id
    }})
  }
}
