import { Order_P } from "src/order/order.orderp.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx: number;

 
    @Column()
    product_name: string;

    @Column()
    img_url: string;

    @Column()
    description: string;

    @Column()
    insert_time: Date;

    @Column()
    update_time: Date;

    @OneToMany((type) => Order_P, (order_p) => order_p.product)
    orders: any;
}