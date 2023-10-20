import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { Menu } from 'src/entities/Menu';
import { User } from 'src/entities/user';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>
    ) {}
    
    async userdetail(username){
        const data = await this.UserRepository.findOne({
            where: {
                username: username
            },
        });
        return data;
    }
  
}
