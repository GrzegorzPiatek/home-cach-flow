import { EditRoutineDto } from './dtos/edit.dto';
import { Routine } from './routine.entity';
import { CreateRoutineDto } from './dtos/create.dto';
import { RoutineService } from './routine.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('routine')
export class RoutineController {

    constructor(private routineService: RoutineService) {}

    @Get()
    getAll() {
        console.log(this.routineService.getAll());
        return this.routineService.getAll();
    }

    @Get('/:id')
    get(@Param('id') id: string) {
        return this.routineService.getById(parseInt(id));
    }   

    @Post()
    create(@Body() body: CreateRoutineDto) {
        return this.routineService.create(body.name, body.amount);
    }

    @Delete('/:id')
    @HttpCode(204)
    delete(@Param('id') id: string) {
        return this.routineService.delete(parseInt(id))
    }

    @Patch('/:id')
    edit(@Param('id') id: string, @Body() body: EditRoutineDto) {
        return this.routineService.edit(+id, body);
    }
}
