import { EntityRepository, Repository } from "typeorm";
import { Boards } from "./boards.entity";

@EntityRepository(Boards)
export class BordersRepository extends Repository<Boards> {
    
}