import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { MenuService } from './menu.service';
import { AccsessService } from './accesess.service';
import { UAccsessService } from './user_accsess.service';
import { Menu } from 'src/entities/Menu';
import { RequestUserMenu } from 'src/DTOS/RequestUserMenu';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, MongoRepository, Repository } from 'typeorm';
import { User } from 'src/entities/user';
import { UserService } from './user.service';

@Controller('/api/v1/User')
@ApiTags('کاریران')
export class UserController {
    constructor(
        private readonly _Userservice: UserService,
        private readonly _Menuservice: MenuService,
        private readonly _accsessservice: AccsessService,
        private readonly _uaccsessservice: UAccsessService,

    ) {
    }
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth('JWT')
    @Get('ListMenuForUser')
    async ListMenuForUser( @Req() req: Request) {
        let username=req.user['username'];

        let menulist = [];
        var res = await this._Menuservice.listmenu();
        var userfound=await this._Userservice.userdetail(username);
        var userac = await this._uaccsessservice.listUAccess(userfound.id);

        res.forEach(item => {
            let re = userac.find(h => h.accsess_id == item.access_id);

            if (re != null) {
                let menu = {} as Menu;
                menu.id = item.id;
                menu.name = item.name;
                menu.img = item.img;
                menu.url = item.url;
                menu.priority=item.priority;
                menulist.push(menu);
            }


        });
        let sortedAscendingCountries = menulist.sort(function (first, second) {
            return first.priority - second.priority;
          });
        return sortedAscendingCountries;
    }
    @Get('ListAcForUser')
    async ListAcForUser(@Req() req: Request) {
        // kycdto.username = req.user['username'];
        return await this._accsessservice.listAccess();
    }
    @Get('ListUAcForUser')
    async ListUAcForUser(@Req() req: Request) {
        // kycdto.username = req.user['username'];
        return await this._uaccsessservice.listUAccess(2);
    }
    @Post('SetUserMenu')
    async SetUserMenu(@Body() data: RequestUserMenu, @Req() req: Request) {
        let res = await this._uaccsessservice.addUAccess(data);
        return await data;
    }




}
