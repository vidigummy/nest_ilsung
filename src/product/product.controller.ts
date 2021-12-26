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

    @Get('/product_one')
    async searchProductByIdx(@Query() idx:number): Promise<any> {
        return this.productService.findOneByIdx(idx);
    }

    @Get('/product_name')
    async searchProductName(@Query() product_name:string): Promise<any> {
        console.log('byName');
        return this.productService.findOne(product_name);
    }
}