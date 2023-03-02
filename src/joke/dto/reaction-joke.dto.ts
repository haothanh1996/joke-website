import { ApiProperty } from '@nestjs/swagger';
import { ReactionType } from '../entities/enums/joke.reaction-type';

export class ReactionJokeDto {
  @ApiProperty()
  type: ReactionType;
}
