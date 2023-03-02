import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { JokesService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReactionJokeDto } from './dto/reaction-joke.dto';

@ApiTags('jokes')
@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  public async createJoke(@Res() res, @Body() createJokeDto: CreateJokeDto) {
    const result = await this.jokesService.createJoke(createJokeDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @Get()
  public async getJokes(@Res() res) {
    const result = await this.jokesService.getJokes();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get(':id')
  public async getJoke(@Res() res, @Param('id') id: string) {
    const result = await this.jokesService.getJoke(id);
    return res.status(HttpStatus.OK).json(result);
  }

  @Put(':id')
  public async updateJoke(
    @Res() res,
    @Param('id') id: string,
    @Body() updateDto: UpdateJokeDto,
  ) {
    const result = await this.jokesService.updateJoke(id, updateDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @Put(':id/reaction')
  public async reaction(
    @Res() res,
    @Param('id') id: string,
    @Body() reactionDto: ReactionJokeDto,
  ) {
    const result = await this.jokesService.reaction(id, reactionDto);
    return res.status(HttpStatus.OK).json(result);
  }
}
