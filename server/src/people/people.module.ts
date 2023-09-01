import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
    imports: [HttpModule],
    controllers: [PeopleController],
    providers: [PeopleService],
})
export class PeopleModule { }
