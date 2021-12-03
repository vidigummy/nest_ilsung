import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepositoryCommon } from "./user.repository.common";
import { User } from "./user.entity";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepositoryCommon)
        private userRepository: UserRepositoryCommon
    ){
        super({
            secretOrKey: 'secret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload){
        const {user_id} = payload.user_id;
        const {user_level} = payload.user_level;

        const user: User = await this.userRepository.findOne({user_id});
        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}