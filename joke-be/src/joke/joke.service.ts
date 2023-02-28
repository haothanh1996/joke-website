import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { Joke, JokeDocument } from './entities/joke.entity';
import { ReactionType } from './entities/enums/joke.reaction-type';

@Injectable()
export class JokeService {
  constructor(
    @InjectModel(Joke.name)
    private readonly jokesModel: Model<JokeDocument>,
  ) {}
  async create(createJokeDto: CreateJokeDto) {
    const data = await this.jokesModel.create(createJokeDto);
    return data;
  }

  async findAll() {
    const data = await this.jokesModel.find();
    return data;
  }

  async findOne(id: number) {
    const data = await this.jokesModel.findOne({ id: id });
    return data;
  }

  async update(id: string, updateJokeDto: UpdateJokeDto) {
    const data = await this.jokesModel.updateOne({ _id: id }, updateJokeDto);
    return data;
  }

  async reaction(id: string, type: ReactionType) {
    const data = await this.jokesModel.findById(id);
    if (type.toUpperCase() == ReactionType.LIKE) {
      data.like += 1;
    } else if (type.toUpperCase() == ReactionType.DISLIKE) {
      data.dislike += 1;
    }
    await this.jokesModel.updateOne({ _id: id }, data);
    return data;
  }
}
