import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({ data: createProductDto });
  }

  async findAll() {
    return await this.databaseService.product.findMany({});
  }

  async findOne(id: string) {
    return await this.databaseService.product.findUnique({ where: { id } });
  }

  async update(id: string, updateProductDto: Prisma.ProductUpdateInput) {
    return await this.databaseService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.product.delete({ where: { id } });
  }
}
