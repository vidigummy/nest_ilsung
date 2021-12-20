import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { ProductRepository } from 'src/product/product.repository';
import { Repository } from 'typeorm';
import { Order_Sheet } from './order.ordersheet.entity';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>,
    ){
        this.productRepository = productRepository;
    }

    async findAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    // async findtest(): Promise<Order_Sheet[]>{

    // }
}
