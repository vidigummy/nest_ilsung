import { Injectable, Req } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Product } from 'src/product/product.entity';
import { ProductRepository } from 'src/product/product.repository';
import { Repository , createQueryBuilder, getConnection, getRepository, getManager} from 'typeorm';
import { Order_Sheet } from './order.ordersheet.entity';
import { OrderSheetAdm } from './order.order_sheet_adm.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Order_Sheet) private orderRepository: Repository<Order_Sheet>,
    ){
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        // this.entityManager = getManager();
    }

    async findAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    async findtest(): Promise<Order_Sheet[]>{
        return this.orderRepository.find();
    }

    async matchWith(){
        var a = await getRepository(Order_Sheet).createQueryBuilder('order_sheet').leftJoinAndSelect('order_sheet.user','user').getMany();
        console.log(a);
        // const first = await getConnection().createQueryBuilder().select('order_sheet','user').from(Order_Sheet, 'order_sheet').getMany();
        // console.log(first);
    }

    async getAllOrder(){
        const a = 3;
        // var tmp = await getRepository(Order_Sheet).createQueryBuilder('order_sheet').leftJoinAndSelect('order_sheet.order_products','order_p').where("order_sheet.idx = :idx", {idx : a}).getMany();
        // var tmp = await getRepository(Order_Sheet).createQueryBuilder('order_sheet').where('order_sheet.idx = :order_idx', {order_idx : a}).getMany();
        // console.log(tmp);
        var tmp = await Order_Sheet.findOne({idx: 3}, {relations: ['order_products']});
        return tmp;
    }

    async getAllOrderSheetAdm(){
        const a = 3;
        const entityManager = getManager();
        const test1 = new OrderSheetAdm();
        test1.orderIdx = 3;
        const orderadm = await entityManager.find(OrderSheetAdm,{userIdx: 32});
        orderadm.forEach(element => console.log(element));
        // console.log(orderadm);
    }
}
