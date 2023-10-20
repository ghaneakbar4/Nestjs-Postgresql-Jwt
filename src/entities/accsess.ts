import { ApiProperty } from '@nestjs/swagger';
import { Entity, ObjectId, Column, ObjectIdColumn, Relation, OneToMany, Table, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Accsess {
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column()
   
    name:string
    @Column()
   
    parentid:number
    
}