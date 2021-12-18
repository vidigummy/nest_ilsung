import { Body, Controller, Get, Post, Render, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthCredentialsSignInDto } from './dto/auth-chredential-signin.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.docorator';
import { User } from './user.entity';
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

    // @Post('/test')
    // // @UseGuards(AuthGuard())
    // test(@GetUser() user:User){
    //     console.log('user',user);
    //     return user;
    // }

    @Post('/test')
    @UseGuards(AuthGuard('jwt'))
    test(@Req() req){
        console.log("여기까1진 왔다잉?");
        console.log('req',req);
    }
}
