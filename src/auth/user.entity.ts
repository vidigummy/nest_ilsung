import { Boards } from "src/borders/boards.entity";
import { Order_Sheet } from "src/order/order.ordersheet.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    idx: number;
    
    @Column()
    user_level:number;

    @Column({unique : true})
    user_id:string;

    @Column()
    user_passwd:string;

    @Column({unique : true})
    phone_number:string;

    @Column()
    address:string;

    @Column({unique : true})
    email:string;

    @Column()
    insert_time:Date;

    @Column()
    update_time:Date;

    @OneToMany((type) => Order_Sheet, (order_sheet) => order_sheet.user)
    order_sheets:Order_Sheet[];

    @OneToMany((type) => Boards, (boards) => boards.user)
    border_list:Boards[];
}