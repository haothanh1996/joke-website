import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class JokeDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @AutoMap()
  content: string;

  @AutoMap()
  @ApiProperty()
  like: number;

  @AutoMap()
  @ApiProperty()
  dislike: number;
}
