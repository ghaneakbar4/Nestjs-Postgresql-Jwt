import { Body, Controller, Post, Get, UseGuards, Req, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { authorize } from "passport";
import { ApiBearerAuth, ApiBody, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Request } from 'express';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { User } from 'src/entities/user';
import { get } from 'http';
import { Param, Put } from '@nestjs/common/decorators';

@ApiTags('مدیریت هویت')
@Controller('/api/v1/Auth')
export class AuthController {
    // define the auth and user service.
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>, private authService: AuthService) { }
    // login route
    @Post('Login')
    // find the user based on the input data
    async login(@Body() userDTO: LoginDTO, @Res() response: Response) {
        const user = await this.UserRepository.findOneBy(userDTO);
        if (user == null) {
            response.status(202).send('not found')
        }
        // define a payload
        const payload = {
            username: user.username,
        }
        //get a JWT authentication token from the payload
        const token = await this.authService.signPayload(payload);
        const found = await this.UserRepository.findOne({
            where: {
                username: userDTO.username
            },
        });
        const data={
            token:token,
           
        }
        
        // return the user and the token
        response.status(200).send(data)
    }
    // registration route

    @Post('Register')
    async register(@Body() userDTO: RegisterDTO, @Res() response: Response) {
        const found = await this.UserRepository.find({
            where: {
                username: userDTO.username,
            },
        });


        if (found.length == 0) {
           // userDTO.dedicateid = Math.floor(100000 + Math.random() * 900000).toString()
            const user = await this.UserRepository.save(userDTO);
            const found1 = await this.UserRepository.find({
                where: {
                    username: userDTO.username,
                },
            });
            response.status(200).send(found1)
        } else {

            response.status(202).send('duplicat')

        }
    }
    // @UseGuards(AuthGuard('jwt'))
    // @ApiBearerAuth('JWT')
    @Get('getlistuser')
    async getlistuser(@Res() response: Response) {
        const found = await this.UserRepository.find();

        response.status(200).send(found)


    }
    // @UseGuards(AuthGuard('jwt'))
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth('JWT')
    @Get('UserDetail')
    async UserDetail(@Req() req: Request) {
        try {
            const found = await this.UserRepository.findOne({
                where: {
                    username: req.user['username']
                },
            });
            return found;
        } catch {
            return null
        }

    }
    // @UseGuards(AuthGuard('jwt'))
    // @ApiBearerAuth('JWT')
    @Get('DeleteUser/:id')
    async DeleteUser(@Param("id") id:number, @Req() req: Request) {
        try {
            const found = await this.UserRepository.findOneById(id);
          
            var res=await this.UserRepository.delete(found);
            return true;
        } catch {
            return null
        }

    }
    

}


