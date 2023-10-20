import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { Menu } from 'src/entities/Menu';
import { Accsess } from 'src/entities/accsess';

@Injectable()
export class AccsessService {
    constructor(
        @InjectRepository(Accsess)
        private readonly AccessRepository: Repository<Accsess>
    ) {}
    
    async listAccess(){
        const  data=await this.AccessRepository.find();

        return data;
    }
  
}
