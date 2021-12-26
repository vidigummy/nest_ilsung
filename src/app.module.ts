import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';
import { OrderModule } from './order/order.module';
import { Order_Sheet } from './order/order.ordersheet.entity';
import { Order_P } from './order/order.orderp.entity';
import { OrderSheetAdm } from './order/order.order_sheet_adm.entity';
import { BordersModule } from './borders/boards.module';
import { Boards } from './borders/boards.entity';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'secret',
      signOptions:{
        expiresIn: 60*60,
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '49.50.167.99',
      port: 3306,
      username: 'ryu',
      password: 'fbehddls147!',
      database: 'ilsung',
      entities:[User,Product,Order_Sheet,Order_P,OrderSheetAdm, Boards],
      synchronize: false,
    }),
    AuthModule,
    UsersModule,
    ProductModule,
    OrderModule,
    BordersModule,
    InfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
