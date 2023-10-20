import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { Menu } from 'src/entities/Menu';
import { Accsess } from 'src/entities/accsess';
import { User_access } from 'src/entities/user_accsess';
import { RequestUserMenu } from 'src/DTOS/RequestUserMenu';

@Injectable()
export class UAccsessService {
    constructor(
        @InjectRepository(User_access)
        private readonly UAccessRepository: Repository<User_access>
    ) { }

    async listUAccess(id) {
        const data = await this.UAccessRepository.find({
            where: {
                user_id:id
            },
        }

        );

        return data;
    }
    async addUAccess(data1:RequestUserMenu) {
        const data = await this.UAccessRepository.find({
            where: {
                user_id:data1.userid
            },
        }
        
    

        );
        
        const res=await this.UAccessRepository.remove(data);
        data1.acid.forEach(p => {
            let uac = {} as User_access;
            uac.accsess_id= p['id'];
            uac.user_id=data1.userid;
            this.UAccessRepository.save(uac);
        });

        return data;
    }

}
