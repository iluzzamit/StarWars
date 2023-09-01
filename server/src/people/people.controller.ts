import { Controller, Get, Query } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly service: PeopleService) {}

  @Get()
  async getPeoples(@Query('page') page: number = 1, @Query('search') search: string = '') {
    return this.service.getPeoples(page, search);
  }
}
