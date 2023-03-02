import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appConfiguration, AppConfiguration } from 'config';
import { AppModule } from './app.module';

const globalPrefix = '/api';
const configureSwagger = (app: INestApplication) => {
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  const baseApis = '/' + appConfig.baseUrl + globalPrefix;
  const baseUrl = baseApis.replace('//', '/');
  const swaggerDocOptions = new DocumentBuilder()
    .setTitle('Joke Service')
    .setDescription('Joke service APIs description')
    .setVersion('1.0.0')
    .addServer(baseUrl)
    .setBasePath(baseUrl)
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions, {
    ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup('docs', app, swaggerDoc);
};
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  app.setGlobalPrefix(globalPrefix);
  configureSwagger(app);
  app.enableCors();
  const server = await app.listen(appConfig.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
  server.setTimeout(1800000);
};
bootstrap();
