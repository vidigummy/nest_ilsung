import { Body, Controller, Get, NotAcceptableException, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'http';
import { Product } from 'src/product/product.entity';
import { ProductModule } from 'src/product/product.module';
import { OrderService } from './order.service';

@Controller('order')
@UseGuards(AuthGuard('jwt'))
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    async orderMain(@Req() req): Promise<any>{
        return this.orderService.findAll();
    }

    @Get('/test')
    async orderview(@Req() req): Promise<any>{
        return this.orderService.findtest();
    }

    @Get('/wtf')
    async whatthefuck(@Req() req){
        console.log(this.orderService.matchWith());
    }


    // getUserInfo(@Req() req){
    //     const head = req.headers.authorization.replace('Bearer ', '');
    //     var base64Payload = head.split('.')[1];
    //     var payload_p = Buffer.from(base64Payload, 'base64');
    //     var result = JSON.parse(payload_p.toString());
    //     var user_id = result.get('user_id');
    //     var user_level = result.get('user_level');
    //     return {user_id, user_level};
    // }

    @Get('/orderIdTest')
    async getOrderInfo(){
        // var tmp = await this.orderService.getAllOrder();
        // console.log(tmp);
        return this.orderService.getAllOrderSheetAdm();
    }

    @Post('order')
    async putOrder(@Req() req){
        // console.log("hh");
        const head = req.headers.authorization.replace('Bearer ', '');
        var base64Payload = head.split('.')[1];
        var payload_p = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload_p.toString());
        var a = result.get('user_id');
        console.log(typeof(a));
        // var user_id = result.get('user_id');
        this.orderService.putOrder('vidigummy');

        
        // this.orderService.putOrder(user_id, );
    }
}
