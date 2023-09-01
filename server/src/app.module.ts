import { PlanetModule } from './planets/planet.module';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    PeopleModule,
    PlanetModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
