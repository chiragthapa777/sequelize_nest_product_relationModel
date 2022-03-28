import { Brand } from './../brand/entities/brand.entity';
import { Product_Tag } from './../tags/entities/product_tag.entity';

import { Injectable, Delete, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productModel: typeof Product,
  @InjectModel(Brand) private brandModel: typeof Brand){}
  async create(createProductDto: CreateProductDto):Promise<Product>{
    // const brand=await this.brandModel.findByPk(createProductDto.brandId)

    return await this.productModel.create({...createProductDto, userId:1})
  }

  async findAll():Promise<CreateProductDto[]> {
    return await this.productModel.findAll({include:["images","brand",{model:Product_Tag,include:["tag"]},"category"]});
  }

  async findOne(id: number):Promise<CreateProductDto> {
    // return await this.productModel.findByPk(id);
    return await this.productModel.findOne({
      where:{
        id
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productModel.update(updateProductDto,{where:{id}});
    return await this.productModel.findByPk(id)
  }

  async remove(id: number) {
    let Product= await this.productModel.findByPk(id)
    if(!Product) throw new ForbiddenException("product with this id does not exist")
    await this.productModel.destroy({where:{
      id
    },
  });
    return Product
  }
}
