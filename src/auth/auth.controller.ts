import { Body, Controller, Get, Post, Render, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthCredentialsSignInDto } from './dto/auth-chredential-signin.dto';
@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService,
    ){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signin(@Body(ValidationPipe) authCredentialsSignInDto:AuthCredentialsSignInDto ): Promise<{accessToken:string}>{
        return this.authService.signIn(authCredentialsSignInDto);
    }

    @Get('/signin')
    @Render('signin')
    signinpage(){

    }

    @Get('/signup')
    @Render('signup')
    signuppage(){
        
    }

}
