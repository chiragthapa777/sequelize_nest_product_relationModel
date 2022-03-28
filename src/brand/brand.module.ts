import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from './entities/brand.entity';

@Module({
  imports:[SequelizeModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandService]
})
export class BrandModule {}
