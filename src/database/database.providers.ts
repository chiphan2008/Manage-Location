/** @format */

import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/.env` });

import { Sequelize } from 'sequelize-typescript';
import { Location } from 'modules/locations/entities/location.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        // define: {
        //   timestamps: false,
        // },
      });
      sequelize.addModels([Location]);
      await sequelize.sync();
      return sequelize;
    },
  },
  // {
  //   provide: MONGODB.DATABASE_CONNECTION,
  //   useFactory: (): Promise<typeof mongoose> =>
  //     mongoose.connect(process.env.MONGO_CONNECTION),
  // },
];
