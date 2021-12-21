import { Product } from "src/product/product.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order_Sheet } from "./order.ordersheet.entity";

@Entity()
export class Order_P extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx:number;

    @ManyToOne(type => Product, product => product.orders)
    product:Product;

    @ManyToOne((type) => Order_Sheet, (order_sheet) => order_sheet.order_products)
    order:Order_Sheet;

    @Column()
    quentity: number;

    @Column()
    insert_time: Date;
    
    @Column()
    update_time: Date;
}