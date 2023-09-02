import { EnumQueryParams } from 'src/common/enums/EnumQueryParams';
import { Controller, Get, Query } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller('planet')
export class PlanetController {
  constructor(private readonly service: PlanetService) {}

  @Get()
  async getPlanets(@Query(EnumQueryParams.PAGE) page: number = 1, @Query(EnumQueryParams.SEARCH) search: string = '') {
    const lala = await this.service.getPlanets(page, search);
    return lala;
  }
}
