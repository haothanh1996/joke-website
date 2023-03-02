import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { forMember, Mapper, mapFrom } from '@automapper/core';
import { createMap } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { JokeDto } from '../dto/joke.dto';
import { Joke } from '../entities/joke.entity';

@Injectable()
export class JokeMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Joke,
        JokeDto,
        forMember(
          (des) => des.id,
          mapFrom((src) => src['id']),
        ),
        forMember(
          (des) => des.content,
          mapFrom((src) => src.content),
        ),
        forMember(
          (des) => des.like,
          mapFrom((src) => src.like),
        ),
        forMember(
          (des) => des.dislike,
          mapFrom((src) => src.dislike),
        ),
      );
    };
  }
}
