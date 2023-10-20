import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

export class  RequestUserMenu{
    @ApiProperty()
    userid: number;

    @ApiProperty()
    acid:number[]
  
    
}