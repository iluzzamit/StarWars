import { EnumQueryParams } from '../common/enums/EnumQueryParams';
import { Controller, Get, Query } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly service: PeopleService) {}

  @Get()
  async getPeoples(@Query(EnumQueryParams.PAGE) page: number = 1, @Query(EnumQueryParams.SEARCH) search: string = '') {
    return this.service.getPeoples(page, search);
  }
}
