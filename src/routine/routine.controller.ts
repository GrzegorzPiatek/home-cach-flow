import { Controller, Get } from '@nestjs/common';

@Controller('routine')
export class RoutineController {

    @Get('')
    getUsers() {
        return {'id': 1, 'name':'Flat'}
    }

}
