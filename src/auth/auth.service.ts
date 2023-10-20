import {Injectable} from '@nestjs/common';
import {sign} from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { User } from 'src/entities/user';
@Injectable()
export class AuthService {
    // define user service
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>
    ) {}

    async signPayload(payload: any) {
        // token to expire in 12 hours
        let token = sign(payload, 'secretKey', { expiresIn: '12h' });
        return token;
    }
    async validateUser(payload: any) {
        
        return await this.UserRepository.findOneBy({username:payload['username']});
    }
 }