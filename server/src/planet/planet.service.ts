import { EnumConfig } from 'src/common/enum/EnumConfig';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class PlanetService {
    resourcePrefix = 'planets'
    
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) { }

    async getPlanets(page: number, search: string) {
        const resourceUrl = this.configService.get(EnumConfig.RESOURCE_URL);
        const response = this.httpService.get(`${resourceUrl + this.resourcePrefix}/?page=${page}&search=${search}`);
        return (await firstValueFrom(response)).data;
    }
}
