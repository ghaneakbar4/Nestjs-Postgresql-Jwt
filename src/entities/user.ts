import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @Column()
  name: string;

  @Column()
  password: string;
  }

