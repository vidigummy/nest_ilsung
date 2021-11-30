import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class User{
    @PrimaryGeneratedColumn('rowid')
    idx:number;

    @Column()
    user_level:number;

    @Column()
    user_id:string;

    @Column()
    user_passwd:string;

    @Column()
    insert_time:Date;

    @Column()
    update_time:Date;

    @Column()
    phone_number:string;

    @Column()
    address:string;

    @Column()
    email:string;
}

export class Product{
    @PrimaryGeneratedColumn('rowid')
    idx:number

    @Column()
    product_name:string;

    @Column()
    img_url:string;

    @Column()
    description:string;

    @Column()
    insert_time:Date;

    @Column()
    update_time:Date;
}