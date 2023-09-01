import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
    imports: [HttpModule],
    controllers: [PlanetController],
    providers: [PlanetService],
})
export class PlanetModule { }
