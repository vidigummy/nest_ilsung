import { Controller, Get, Render } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
    constructor(private readonly infoService: InfoService){}

    @Get()
    @Render('info')
    getInfo(){
        // console.log("hihi");
    }
}
