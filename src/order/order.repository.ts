import { EntityRepository, Repository } from "typeorm";
import OrderSeetCommonDto from "./dto/order-sheet-common.dto";
import { Order_Sheet } from "./order.ordersheet.entity";

@EntityRepository(Order_Sheet)
export class OrderRepository extends Repository<Order_Sheet>{
    
    async createOrder(orderSheetCommonDto: OrderSeetCommonDto): Promise<void>{
        
    }
}