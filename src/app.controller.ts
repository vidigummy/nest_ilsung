import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './app.enties';
import { Hash } from 'crypto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/index_hbs')
  @Render('test')
  getHello_hbs(){
    return {message: "this is from server"};
  }

  
  
}
