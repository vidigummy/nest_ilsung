import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthCredentialsSignInDto } from './dto/auth-chredential-signin.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
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

    async signIn(authCredentialsSignInDto: AuthCredentialsSignInDto): Promise<{accessToken:string}>{
        const {user_id, user_passwd} = authCredentialsSignInDto;
        const user = await this.userRepository.findOne({user_id});
        const user_level = user.user_level;
        if(user && await bcrypt.compare(user_passwd, user.user_passwd)){
            //유저 토큰 생성(secret + payload)
            const payload = {user_level, user_id};
            const accessToken = await this.jwtService.sign(payload);
            return {accessToken};
        }else{
            throw new UnauthorizedException('logIn Failed!');
        }
    }
}
