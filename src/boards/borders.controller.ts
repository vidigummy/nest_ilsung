import { Body, Controller, Delete, Get, Param, Post, Put, Render, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { BordersService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
@UseGuards(AuthGuard('jwt'))
export class BoardsController {
    constructor(private boardsService: BordersService){}
    @Get()
    async getAll(@Req() req):Promise<any>{
        const head = req.headers.authorization.replace('Bearer ', '');
        var base64Payload = head.split('.')[1];
        var payload_p = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload_p.toString());
        const user_level = result['user_level'];
        const user_id = result['user_id'];
        if(user_level>0){
            return this.boardsService.findAll();   
        }
        else{
            return this.boardsService.findAllFromUser(user_id);
        }
    }

    @Get('/write')
    @Render('board')
    async write(){
    }

    @Post('/write')
    async writeBoard(@Req() req, @Body() createBoardDto: CreateBoardDto){
        const head = req.headers.authorization.replace('Bearer ', '');
        var base64Payload = head.split('.')[1];
        var payload_p = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload_p.toString());
        const user_name = result['user_id'];
        return await this.boardsService.writeNewBoard(user_name, createBoardDto);
    }

    @Get(':id')
    async getOne(@Param() param): Promise<any>{
        // console.log(param.id);
        return this.boardsService.getOneBoard(param.id);
    }

    @Delete(':id')
    async deleteOne(@Req() req,@Param() param): Promise<any>{
        const head = req.headers.authorization.replace('Bearer ', '');
        var base64Payload = head.split('.')[1];
        var payload_p = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload_p.toString());
        const user_name = result['user_id'];

        try{
            this.boardsService.deleteOneBoard(user_name, param.id);
            return true;
        }catch{
            return false;
        }
    }
    //댓글 달기(admin만 가능함) 또는 500번대 에러 발생
    @Put(':id')
    async addAnswer(@Req() req, @Body() answer: string, @Param() param){
        const head = req.headers.authorization.replace('Bearer ', '');
        var base64Payload = head.split('.')[1];
        var payload_p = Buffer.from(base64Payload, 'base64');
        var result = JSON.parse(payload_p.toString());
        // const user_name = result['user_id'];
        
        const user_level = result['user_level'];
        if(user_level < 1){
            throw Error('Invalid user_level');
        }
        try{
            // console.log(answer);
            this.boardsService.putOneBoard(result['user_id'],param.id, answer);
            return true;
        }catch{
            return false;
        }
    }
}
