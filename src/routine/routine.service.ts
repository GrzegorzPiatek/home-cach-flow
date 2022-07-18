import { EditRoutineDto } from './dtos/edit.dto';
import { Injectable } from '@nestjs/common';
import { Routine } from './routine.entity';
import { isSet } from 'util/types';

let routines =  [
    {id: 1, name: 'Flat', amount: 2200},
    {id: 2, name: 'Gym', amount: 49.90}
];

@Injectable()
export class RoutineService {


    getAll() {
        return routines;
    }

    getById(id: number) {
        return routines.find(x => x.id === id);
    }

    create(name: string, amount: number) {
        const id = routines.length + 1;
        console.log("id",{id});
        const newRoutine = {id, name, amount};
        console.log(newRoutine);
        routines.push(newRoutine);
        
        return newRoutine;
    }

    delete(id: number) {
        routines = routines.filter(x => x.id !== id);
    }

    edit(id: number, routine: EditRoutineDto) {
        const editRoutine = routines.find(x => x.id === id); 
        if(isSet(routine.amount)) {
            editRoutine.amount = routine.amount;
        }
        if(isSet(routine.name)) {
            editRoutine.name = routine.name;
        }

        return editRoutine;
    }
}
