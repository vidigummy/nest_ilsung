import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepositoryCommon } from "./user.repository.common";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){
        super({
            secretOrKey: 'secret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload){
        const {user_id} = payload.user_id;

        const user: User = await this.userRepository.findOne({user_id});
        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}