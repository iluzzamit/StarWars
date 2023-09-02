import { EnumSwapiResources } from 'src/common/enums/EnumSwapiResources';
import { EnumQueryParams } from 'src/common/enums/EnumQueryParams';
import { EnumConfig } from '../common/enums/EnumConfig';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class PeopleService {
    resourcePrefix = EnumSwapiResources.PEOPLE

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) { }

    async getPeoples(page: number, search: string) {
        const resourceUrl = this.configService.get(EnumConfig.RESOURCE_URL);
        const response = this.httpService.get(
            `${resourceUrl + this.resourcePrefix}/?${EnumQueryParams.PAGE}=${page}&${EnumQueryParams.SEARCH}=${search}`
        );
        return (await firstValueFrom(response)).data;
    }
}
