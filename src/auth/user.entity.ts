import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}