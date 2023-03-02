import { ApiProperty } from '@nestjs/swagger';

export class CreateJokeDto {
  @ApiProperty()
  content: string;
}
