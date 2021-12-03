import { User } from "./user.entity";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
@EntityRepository(User)
export class UserRepositoryCommon extends Repository<User>{
    async createUser(authCredentialsDto: AuthCredentialsDto):Promise<void>{
        const {user_id, user_passwd} = authCredentialsDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user_passwd, salt);
        console.log(hashedPassword);
        const user = this.create({user_id, user_passwd:hashedPassword});
        try{
            await this.save(user);
        }catch(error){
            if(error.code === '23505'){
                throw new ConflictException('이거 안돼요.');
            }else{
                throw new InternalServerErrorException();
            }
        }
        
        
    }
    
}