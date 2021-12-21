import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order_P } from "./order.orderp.entity";

@Entity()
export class Order_Sheet extends BaseEntity{
    @PrimaryGeneratedColumn()
    idx: number;

    @ManyToOne((type) => User, (user) => user.order_sheets, {nullable: false, onDelete: 'CASCADE'})
    // @JoinColumn({name: 'userIdx'})
    user:User;

    @Column()
    insert_time: Date;

    @Column()
    update_time: Date;

    @OneToMany(type => Order_P, (order_p) => order_p.order)
    order_products: Order_P[];
}