import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService,
    ){}

    @Get('/')
    async allProduts(): Promise<any> {
        return this.productService.findAll();
    }

    // @Get('/:idx')
    // async findOneProduct(@Param('idx') idx: number): Promise<any> {
    //     console.log('hi');
    //     console.log(idx);
    //     return this.productService.findOneByIdx(idx);
    // }

    @Get('/product-idx/:idx')
    async searchProductByIdx(@Param() param): Promise<any> {
        return this.productService.findOneByIdx(param.idx);
    }

    @Get('/product-name/:name')
    async searchProductName(@Param() param): Promise<any> {
        console.log(param.name);
        return this.productService.findOne(param.name);
    }
}