import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) { }
  
  async create(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    const result = await this.productsRepository.save(product);
    return result;
  }

  findAll() {
    try {
      return this.productsRepository.find();
    } catch (error) {
     throw new HttpException(
       {
         status: HttpStatus.FORBIDDEN,
         error: "L'accès n'est pas autorisé",
       },
       HttpStatus.FORBIDDEN,
       {
         cause: error,
       },
     );
    } 
  }

  async findOne(product_id: number) {
    const found = await this.productsRepository.findOneBy({ product_id });
    if (!found) {
      throw new NotFoundException(`Product with the id ${product_id} not found`);
    }
    return found;
  }

  async update(product_id: number, updateProductDto: UpdateProductDto) {
    let product = await this.findOne(product_id);

    const updatedProduct = this.productsRepository.merge(
      product,
      updateProductDto,
    );
    const result = await this.productsRepository.save(updatedProduct);

    return result;
  }

  async remove(product_id: number) {
   const product = await this.findOne(product_id);
   const response = await this.productsRepository.remove(product);
    return response;
  }
}
