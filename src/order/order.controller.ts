import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Product } from 'src/product/product.entity';
import { ProductModule } from 'src/product/product.module';
import { OrderService } from './order.service';

@Controller('order')
@UseGuards(AuthGuard('jwt'))
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    async orderMain(): Promise<any>{
        return this.orderService.findAll();
    }

    @Get('/test')
    async orderview(): Promise<any>{
        
    }
}
