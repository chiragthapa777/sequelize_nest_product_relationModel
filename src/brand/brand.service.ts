import { ForbiddenException, HttpCode, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand) private brandModel: typeof Brand){}
  async create(createBrandDto) {
    return await this.brandModel.create(createBrandDto)
  }

  async findAll() {
    return await this.brandModel.findAll() ;
  }

  async findOne(id: number) {
    return await this.brandModel.findByPk(id);
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    return await this.brandModel.update(updateBrandDto, {where:{id}});
  }

  async remove(id: number) {
    try {
      return await this.brandModel.destroy({where:{id}});
      
    } catch (error) {
      if(error.name==='SequelizeForeignKeyConstraintError'){
        // throw new ForbiddenException("You cannot delete brand asscociated with product")
        throw new HttpException('You cannot delete brand asscociated with product',HttpStatus.FORBIDDEN)
      }
      throw new ForbiddenException(error)
    }
  }
}
