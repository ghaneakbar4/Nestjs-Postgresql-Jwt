import { Module } from '@nestjs/common';
import {  cartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './cart.service';
import { Cart } from 'src/entities/cart';

@Module({
  imports: [ TypeOrmModule.forFeature([Cart])],
  controllers: [cartController],
  providers: [CartService]
})
export class CartModule {}
