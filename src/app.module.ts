import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LocationsModule } from './modules/locations/locations.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from 'config/configuration';
import { DatabaseModule } from 'database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/.env`,
      load: [getConfig],
    }),
    DatabaseModule,
    LocationsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
