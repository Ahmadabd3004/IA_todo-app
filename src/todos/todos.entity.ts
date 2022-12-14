import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todos {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;   
}