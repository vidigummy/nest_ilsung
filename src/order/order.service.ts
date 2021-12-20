import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { ProductRepository } from 'src/product/product.repository';
import { Repository } from 'typeorm';
import { Order_Sheet } from './order.ordersheet.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Order_Sheet) private orderRepository: Repository<Order_Sheet>,
    ){
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    async findAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    async findtest(): Promise<Order_Sheet[]>{
        return this.orderRepository.find();
    }
}
