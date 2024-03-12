import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { locationProviders } from './locations.providers';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService, ...locationProviders],
})
export class LocationsModule {}
