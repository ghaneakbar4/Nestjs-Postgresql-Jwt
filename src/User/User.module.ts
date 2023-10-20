import { Module } from '@nestjs/common';
import {  UserController } from './user.controller';
import { MenuService } from './menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from 'src/entities/Menu';
import { AccsessService } from './accesess.service';
import { UAccsessService } from './user_accsess.service';
import { Accsess } from 'src/entities/accsess';
import { User_access } from 'src/entities/user_accsess';
import { UserService } from './user.service';
import { User } from 'src/entities/user';

@Module({
  imports: [ TypeOrmModule.forFeature([Menu,Accsess,User_access,User])],
  controllers: [UserController],
  providers: [MenuService,AccsessService,UAccsessService,UserService]
})
export class UserModule {}
