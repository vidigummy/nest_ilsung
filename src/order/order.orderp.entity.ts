import { Product } from "src/product/product.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order_Sheet } from "./order.ordersheet.entity";

@Entity()
export class Order_P extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx:number;

    @ManyToOne(type => Product, product => product.orders)Product: any;
    // @JoinColumn({name: 'product_idx'})
    product_idx:Product;

    @ManyToOne(type => Order_Sheet, (orderSheet) => orderSheet.order_products)
    // @JoinColumn({name: 'order_sheet_idx'})
    order:Order_Sheet;

    @Column()
    quentity: number;

    @Column()
    insert_time: Date;
    
    @Column()
    update_time: Date;
}