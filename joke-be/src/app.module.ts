import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [
    JokeModule,
    MongooseModule.forRoot('mongodb://localhost:27017/joke'),
  ],
})
export class AppModule { }
