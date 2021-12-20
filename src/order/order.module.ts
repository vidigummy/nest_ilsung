import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from 'src/auth/user.repository';
import { Product } from 'src/product/product.entity';
import { ProductRepository } from 'src/product/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { User } from 'src/auth/user.entity';
import { Order_Sheet } from './order.ordersheet.entity';
import { Order_P } from './order.orderp.entity';

@Module({
  imports: [
    AuthModule, ProductModule,
    TypeOrmModule.forFeature([User, Product, Order_Sheet, Order_P]),
  ],
  providers: [OrderService, ProductRepository, UserRepository],
  controllers: [OrderController]
})
export class OrderModule {}
