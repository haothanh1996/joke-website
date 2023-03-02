import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class JokeDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  like: number;

  @ApiProperty()
  dislike: number;
}
