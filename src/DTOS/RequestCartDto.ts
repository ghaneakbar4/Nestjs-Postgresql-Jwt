import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

export class  RequestCart{
 

    @ApiProperty()
    status: number;
    @ApiProperty()
    cartnumber: string;
    @ApiProperty()
    ownername: string;
    @ApiProperty()
    inventory: string;
    @ApiProperty()
    img: string;
  
    
}