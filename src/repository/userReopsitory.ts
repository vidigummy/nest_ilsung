import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/app.enties';

@EntityRepository(User)
export class UserRespository{
    
}