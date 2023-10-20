import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: number;
    @Column()
    cartnumber: string;
    @Column()
    ownername: string;
    @Column()
    inventory: string;
    @Column()
    img: string;
}