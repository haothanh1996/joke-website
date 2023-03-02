import { Module } from '@nestjs/common';
import { JokesService } from './joke.service';
import { JokesController } from './joke.controller';
import { Joke, JokeSchema } from './entities/joke.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeMapper } from './mapper/joke.mapper';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
  ],
  controllers: [JokesController],
  providers: [JokesService, JokeMapper],
})
export class JokeModule {}
