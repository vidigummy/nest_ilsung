import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { getManager, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
    ){
        this.productRepository = productRepository;
    }


    findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(product_name: string): Promise<Product>{
        try{
            const entityManger = getManager();
            const product = await entityManger.findOne(Product,{product_name: product_name});
            return product;
        }catch{
            throw new Error(`Product ${product_name}`);
        }
        // // const found = await this.productRepository.findOne("product_name = :pname",{pname:product_name});
        // if(!product){
        //     throw new NotFoundException(`cant find ${product_name}`);
        // }
        // console.log(found);
        // return product;
    }

    async findOneByIdx(idx: number):Promise<Product>{
        // console.log(idx_p);
        const found = await this.productRepository.findOne(idx);
        if(!found){
            throw new NotFoundException(`cant find ${idx}`);
        }
        console.log(found);
        return found;
    }

}
