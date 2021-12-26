import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { createConnection, getConnection, getManager, In, Repository } from 'typeorm';
import { Boards } from './boards.entity';
import { BordersRepository } from './borders.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BordersService {
    constructor(@InjectRepository(Boards) private bordersRepository: Repository<Boards>){
        this.bordersRepository = bordersRepository;
    }

    async findAll(): Promise<Boards[]>{
        return await this.bordersRepository.find();
    }

    async findAllFromUser(userId: string){
        const entityManager = getManager();
        try{
            const user = await entityManager.findOne(User,{user_id: userId});
            
            try{
                const boardsUsers = await entityManager.find(Boards,{user: user});
                return boardsUsers;
            }
            catch{
                return [];
            }
        }catch{
            return false;
        }
   
    }
    async writeNewBoard(userId : string,createBoardDto : CreateBoardDto){
        try{
            // console.log(createBoardDto);
            const entityManager = getManager();
            const user = await entityManager.findOne(User,{user_id:userId});
            const board = new Boards();
            board.user = user;
            board.full_txt = createBoardDto.full_txt;
            board.title = createBoardDto.title;
            const queryRunner = getConnection().createQueryRunner();

            await queryRunner.startTransaction();
            queryRunner.manager.save(board);
            queryRunner.commitTransaction();
        }catch{
            return false;
        }
        return true;
    }

    async getOneBoard(board_idx : number){
        var tmp = await Boards.findOne({idx:board_idx},{relations: ['user']});
        return tmp;
    }
    

    async deleteOneBoard(board_idx :number){
        await getConnection().createQueryBuilder().delete().from(Boards).where("idx = :id",{id:board_idx}).execute();
    }

    async putOneBoard(board_idx:number, answer:string){
        console.log(answer['answer']);
        await getConnection().createQueryBuilder().update(Boards).set({
            answer:answer['answer'],
        }).where("idx = :id",{id : board_idx}).execute()
        return true;
    }
}
