import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { classes } from '@automapper/classes';
import { appConfiguration, AppConfiguration } from 'config';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [
    JokeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration],
    }),
    MongooseModule.forRootAsync({
      inject: [appConfiguration.KEY],
      useFactory: (config: AppConfiguration) => {
        return {
          uri: config.mongoDB.connection,
          dbName: config.mongoDB.dbname,
        };
      },
    }),
    AutomapperModule.forRoot({
      options: [{ name: '', pluginInitializer: classes }],
      singular: true,
    }),
  ],
})
export class AppModule {}
