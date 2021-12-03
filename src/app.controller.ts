import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
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
