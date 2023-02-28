import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
  ],
})
export class AppModule {}
