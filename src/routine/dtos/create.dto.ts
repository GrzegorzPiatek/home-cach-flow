import { IsNotEmpty } from "class-validator";

export class CreateRoutineDto {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    amount: number;
}