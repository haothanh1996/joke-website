import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => {
  return {
    port: process.env.PORT || 9000,
    baseUrl: process.env.BASE_URL_APIS || '',
    mongoDB: {
      connection: process.env.MONGODB_URI,
      dbname: process.env.MONGODB_DBNAME,
    },
  };
});

export type AppConfiguration = ConfigType<typeof appConfiguration>;
export const InjectAppConfig = () => Inject(appConfiguration.KEY);
