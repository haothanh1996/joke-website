import { mapFrom } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { JokeDto } from '../dto/joke.dto';
import { Joke } from '../entities/joke.entity';

@Injectable()
export class JokeMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      mapper.createMap(Joke, JokeDto).forMember(
        (des) => des.id,
        mapFrom((src) => src._id ?? src.id),
      );
    };
  }
}
