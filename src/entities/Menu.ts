import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class  Menu{
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column()
   
    img:string
    @Column()
   
    name:string
    @Column()
    
    url:string
    @Column()
    
    parent_id:number
    @Column()
  
    priority:number
    @Column()
  
    access_id:number
    
}