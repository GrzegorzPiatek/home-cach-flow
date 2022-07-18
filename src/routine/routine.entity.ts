import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Routine {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;
    
    @ApiProperty()
    @Column()
    amount: number;

}