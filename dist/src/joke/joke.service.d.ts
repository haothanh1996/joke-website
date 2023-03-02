import { Model } from 'mongoose';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { JokeDocument } from './entities/joke.entity';
import { JokeDto } from './dto/joke.dto';
import { Mapper } from '@automapper/core';
import { BaseResult } from './dto/base.result';
export declare class JokesService {
    private readonly jokesModel;
    private readonly mapper;
    constructor(jokesModel: Model<JokeDocument>, mapper: Mapper);
    createJoke(createJokeDto: CreateJokeDto): Promise<BaseResult<JokeDto>>;
    getJokes(): Promise<BaseResult<JokeDto[]>>;
    getJoke(id: string): Promise<BaseResult<JokeDto>>;
    updateJoke(id: string, updateJokeDto: UpdateJokeDto): Promise<BaseResult<boolean>>;
    reaction(id: string, body: any): Promise<BaseResult<JokeDto>>;
}
