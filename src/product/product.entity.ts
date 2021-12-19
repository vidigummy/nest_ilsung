import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}