import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthCredentialsSignInDto } from './dto/auth-chredential-signin.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
import {JwtPayload} from './interfaces/jwt-payload.interface'
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ){}


    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.userRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsSignInDto: AuthCredentialsSignInDto): Promise<any>{
        const {user_id, user_passwd} = authCredentialsSignInDto;
        const user = await this.userRepository.findOne({user_id});
        const user_level = user.user_level;
        if(user && await bcrypt.compare(user_passwd, user.user_passwd)){
            //유저 토큰 생성(secret + payload)
            // console.log(user);
            // const payload = {user_level, user_id};
            
            const newToken = await this.createToken(user_id, user_level);
            // const accessToken = await this.jwtService.sign(payload);
            console.log(newToken);
            return {newToken};
        }else{
            throw new UnauthorizedException('logIn Failed!');
        }
    }

    async validateUser(payload: JwtPayload): Promise<any>{
        console.log(payload.user_level);
        return await this.findOne(payload.user_id);
        
    }

    // async createToken_test(){
    //     const user: JwtPayload = { user_id: 'vidigummy', user_level: 0};
    //     const accessToken = this.jwtService.sign(user);
    //     // user.User.user_level = this
    //     return {accessToken, expiresIn:3600};
    // }


    async createToken(user_id: string, user_level: number){
        const user: JwtPayload = { user_id, user_level};
        const accessToken = this.jwtService.sign(user);
        console.log(accessToken);
        // accessToken.user = {user_id, user_level};
        return {accessToken, expiresIn:3600, user};
    }



    async findOne(user_id : string){
        return new User();
    }
}
