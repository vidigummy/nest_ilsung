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
      entities:[User,Product],
      synchronize: false,
    }),
    AuthModule,
    UsersModule,
    ProductModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
