import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order_Sheet extends BaseEntity{
    @PrimaryGeneratedColumn()
    idx: number;

    @ManyToOne(type => User, user => user.orders)user: any;
    @JoinColumn({name: 'user_idx'})
    user_idx:User;

    @Column()
    insert_time: Date;

    @Column()
    update_time: Date;
    products: any;
}