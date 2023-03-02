import { ApiProperty } from '@nestjs/swagger';

export class UpdateJokeDto {
  @ApiProperty()
  content: string;
}
