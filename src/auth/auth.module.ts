import { RoutineModule } from './../routine/routine.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UsersModule, PassportModule, RoutineModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
