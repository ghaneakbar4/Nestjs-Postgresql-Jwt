import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { CartService } from './cart.service';

import { Menu } from 'src/entities/Menu';
import { RequestUserMenu } from 'src/DTOS/RequestUserMenu';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { User } from 'src/entities/user';
import { RequestCart } from 'src/DTOS/RequestCartDto';


@Controller('/api/v1/Cart')
@ApiTags('کارت')
export class cartController {
    constructor(
        private readonly _cartservice: CartService,

    ) {
    }
   
    @Get('ListCart')
    async ListCart( @Req() req: Request) {
       
        var res = await this._cartservice.ListCart();
        
        return res;
    }
    
    @Post('Addcart')
    async Addcart(@Body() data:RequestCart, @Req() req: Request) {
       
        var res = await this._cartservice.AddCart(data);
        
        return res;
    }



}
