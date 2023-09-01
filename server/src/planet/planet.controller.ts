import { Controller, Get, Query } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller('planet')
export class PlanetController {
  constructor(private readonly service: PlanetService) {}

  @Get()
  async getPlanets(@Query('page') page: number = 1, @Query('search') search: string = '') {
    const lala = await this.service.getPlanets(page, search);
    return lala;
  }
}
