import { NestFactory } from '@nestjs/core';
import { appConfiguration, AppConfiguration } from 'config';
import { AppModule } from './app.module';

const globalPrefix = '/api';
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const server = await app.listen(appConfig.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
  server.setTimeout(1800000);
};
bootstrap();
