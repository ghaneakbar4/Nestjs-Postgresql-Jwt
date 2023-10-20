import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { Menu } from 'src/entities/Menu';
import { Cart } from 'src/entities/cart';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private readonly CartRepository: Repository<Cart>
    ) {}
    
    async ListCart(){
        const  data=await this.CartRepository.find();
        return data;
    }
    async AddCart(newdata){
        const  data=await this.CartRepository.save(newdata);
        return data;
    }
  
}
