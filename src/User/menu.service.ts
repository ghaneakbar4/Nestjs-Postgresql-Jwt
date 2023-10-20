import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { Menu } from 'src/entities/Menu';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private readonly MenuRepository: Repository<Menu>
    ) {}
    
    async listmenu(){
        const  data=await this.MenuRepository.find();
        return data;
    }
  
}
