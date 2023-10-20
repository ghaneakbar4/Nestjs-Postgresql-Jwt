import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class User_access {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;


  @Column()
  accsess_id: number;
  
  }

