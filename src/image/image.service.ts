import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image) private imageModel: typeof Image){}
  async create(createImageDto) {
    return await this.imageModel.create(createImageDto);
  }

  async findAll():Promise<CreateImageDto[]> {
    return await this.imageModel.findAll();
  }

  async findOne(id: number) {
    return await this.imageModel.findByPk(id);
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return await this.imageModel.update(updateImageDto,{where:{id}})
  }

  async remove(id: number) {
    return await this.imageModel.destroy({where:{id}});
  }
}
