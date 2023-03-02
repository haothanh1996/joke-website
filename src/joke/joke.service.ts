import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { Joke, JokeDocument } from './entities/joke.entity';
import { ReactionType } from './entities/enums/joke.reaction-type';
import { JokeDto } from './dto/joke.dto';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BaseResult } from './dto/base.result';
import { deserialize, deserializeArray } from 'class-transformer';

@Injectable()
export class JokesService {
  constructor(
    @InjectModel(Joke.name)
    private readonly jokesModel: Model<JokeDocument>,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async createJoke(createJokeDto: CreateJokeDto): Promise<BaseResult<JokeDto>> {
    const result = new BaseResult<JokeDto>();
    try {
      const joke = await this.jokesModel.create(createJokeDto);
      const autoData = deserialize(Joke, JSON.stringify(joke));
      const jokeDto = await this.mapper.mapAsync(autoData, Joke, JokeDto);
      result.data = jokeDto;
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getJokes(): Promise<BaseResult<JokeDto[]>> {
    const result = new BaseResult<JokeDto[]>();
    const jokes = await this.jokesModel.find();

    if (!jokes) {
      throw new BadRequestException('Jokes is not found');
    }
    const autoData = deserializeArray(Joke, JSON.stringify(jokes));
    const jokeDto = await this.mapper.mapArrayAsync(autoData, Joke, JokeDto);
    result.data = jokeDto;
    return result;
  }

  async getJoke(id: string): Promise<BaseResult<JokeDto>> {
    const result = new BaseResult<JokeDto>();
    const joke = await this.jokesModel.findOne({
      _id: id,
    });

    if (!joke) {
      throw new BadRequestException('Joke is not found');
    }
    const autoData = deserialize(Joke, JSON.stringify(joke));
    const jokeDto = await this.mapper.mapAsync(autoData, Joke, JokeDto);
    result.data = jokeDto;
    return result;
  }

  async updateJoke(
    id: string,
    updateJokeDto: UpdateJokeDto,
  ): Promise<BaseResult<boolean>> {
    const result = new BaseResult<boolean>();
    try {
      const checkExisted = await this.jokesModel.findOne({
        _id: id,
      });
      if (!checkExisted) {
        throw new BadRequestException(`Joke with id "${id}" does not exist!`);
      }

      await this.jokesModel.updateOne({ _id: id }, updateJokeDto);
      result.data = true;
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async reaction(id: string, body): Promise<BaseResult<JokeDto>> {
    const result = new BaseResult<JokeDto>();
    try {
      const joke = await this.jokesModel.findById(id);
      if (body.type.toUpperCase() == ReactionType.LIKE) {
        joke.like += 1;
      } else if (body.type.toUpperCase() == ReactionType.DISLIKE) {
        joke.dislike += 1;
      }
      await this.jokesModel.updateOne({ _id: id }, joke);
      const autoData = deserialize(Joke, JSON.stringify(joke));
      const jokeDto = await this.mapper.mapAsync(autoData, Joke, JokeDto);
      result.data = jokeDto;
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
