import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepositoryCommon } from "./user.repository.common";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import {JwtPayload} from './interfaces/jwt-payload.interface';
import { AuthService } from "./auth.service";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private readonly authService: AuthService,
    ){
        super({
            secretOrKey: 'secret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: JwtPayload, done: Function){
        const user = await this.authService.validateUser(payload);
        if(!user){
            return done(new UnauthorizedException(), false);
        }

        done(null, user);
    }
}