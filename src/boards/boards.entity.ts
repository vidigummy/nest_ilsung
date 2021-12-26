import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Boards extends BaseEntity{
    @PrimaryGeneratedColumn()
    idx: number;

    @ManyToOne((type) => User, user => user.border_list)
    user:User;

    @Column()
    full_txt: string;

    @Column()
    title: string;
    
    @Column({nullable: true})
    answer: string;

    @Column()
    insert_time: Date;

    @Column()
    update_time: Date;



}