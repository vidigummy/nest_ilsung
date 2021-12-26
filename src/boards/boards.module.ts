import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/auth/user.entity';
import { Order_P } from 'src/order/order.orderp.entity';
import { Order_Sheet } from 'src/order/order.ordersheet.entity';
import { OrderSheetAdm } from 'src/order/order.order_sheet_adm.entity';
import { Product } from 'src/product/product.entity';
import { Boards } from './boards.entity';
import { BoardsController } from './borders.controller';
import { BordersService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Module({
  imports:[
    AuthModule,
    TypeOrmModule.forFeature([User, Product, Order_Sheet, Order_P,OrderSheetAdm, Boards ]),
  ],
  controllers: [BoardsController],
  providers: [BordersService, CreateBoardDto]
})
export class BordersModule {}
