/** @format */

import { join } from 'path';

export const getConfig = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: +process.env.PORT || 3333,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
});

export const rootPublicPath = join(__dirname, '../../', 'file');
