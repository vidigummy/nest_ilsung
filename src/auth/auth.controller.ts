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
    async signin(@Body(ValidationPipe) authCredentialsSignInDto:AuthCredentialsSignInDto ): Promise<any>{
        const jwtToken =  await this.authService.signIn(authCredentialsSignInDto);
        console.log(jwtToken);
        return {jwtToken: jwtToken['newToken']['accessToken']};
    }

    // @Post('/signin')
    // async createToken(@Body(ValidationPipe) authCredentialsSignInDto:AuthCredentialsSignInDto ): Promise<any>{
    //     return await this.authService.createToken();
    // }

    @Get('/signin')
    @Render('signin')
    signinpage(){

    }

    @Get('/signup')
    @Render('signup')
    signuppage(){
        
    }

    // @Post('/test')
    // @UseGuards(AuthGuard())
    // test(@GetUser() user:User){
    //     console.log('user',user);
    //     return user;
    // }

    @Post('/test')
    @UseGuards(AuthGuard('jwt'))
    test(@Req() req){
        // console.log(req.authorization);
        // console.log("여기까1진 왔다잉?");
        const head = req.headers.authorization.replace('Bearer ', '');
        var base64Payload = head.split('.')[1];
        var payload_p = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload_p.toString());
        return result;
        // return JSON.parse(req);
    }

    // @Get('token')
    // async createToken_test(): Promise<any>{
    //     return await this.authService.createToken_test();
    // }
}
