"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const joke_entity_1 = require("./entities/joke.entity");
const joke_reaction_type_1 = require("./entities/enums/joke.reaction-type");
const joke_dto_1 = require("./dto/joke.dto");
const nestjs_1 = require("@automapper/nestjs");
const base_result_1 = require("./dto/base.result");
const class_transformer_1 = require("class-transformer");
let JokesService = class JokesService {
    constructor(jokesModel, mapper) {
        this.jokesModel = jokesModel;
        this.mapper = mapper;
    }
    async createJoke(createJokeDto) {
        const result = new base_result_1.BaseResult();
        try {
            const joke = await this.jokesModel.create(createJokeDto);
            const autoData = (0, class_transformer_1.deserialize)(joke_entity_1.Joke, JSON.stringify(joke));
            const jokeDto = await this.mapper.mapAsync(autoData, joke_entity_1.Joke, joke_dto_1.JokeDto);
            result.data = jokeDto;
            return result;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getJokes() {
        const result = new base_result_1.BaseResult();
        const jokes = await this.jokesModel.find();
        if (!jokes) {
            throw new common_1.BadRequestException('Jokes is not found');
        }
        const autoData = (0, class_transformer_1.deserializeArray)(joke_entity_1.Joke, JSON.stringify(jokes));
        const jokeDto = await this.mapper.mapArrayAsync(autoData, joke_entity_1.Joke, joke_dto_1.JokeDto);
        result.data = jokeDto;
        return result;
    }
    async getJoke(id) {
        const result = new base_result_1.BaseResult();
        const joke = await this.jokesModel.findOne({
            _id: id,
        });
        if (!joke) {
            throw new common_1.BadRequestException('Joke is not found');
        }
        const autoData = (0, class_transformer_1.deserialize)(joke_entity_1.Joke, JSON.stringify(joke));
        const jokeDto = await this.mapper.mapAsync(autoData, joke_entity_1.Joke, joke_dto_1.JokeDto);
        result.data = jokeDto;
        return result;
    }
    async updateJoke(id, updateJokeDto) {
        const result = new base_result_1.BaseResult();
        try {
            const checkExisted = await this.jokesModel.findOne({
                _id: id,
            });
            if (!checkExisted) {
                throw new common_1.BadRequestException(`Joke with id "${id}" does not exist!`);
            }
            await this.jokesModel.updateOne({ _id: id }, updateJokeDto);
            result.data = true;
            return result;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async reaction(id, body) {
        const result = new base_result_1.BaseResult();
        try {
            const joke = await this.jokesModel.findById(id);
            if (body.type.toUpperCase() == joke_reaction_type_1.ReactionType.LIKE) {
                joke.like += 1;
            }
            else if (body.type.toUpperCase() == joke_reaction_type_1.ReactionType.DISLIKE) {
                joke.dislike += 1;
            }
            await this.jokesModel.updateOne({ _id: id }, joke);
            const autoData = (0, class_transformer_1.deserialize)(joke_entity_1.Joke, JSON.stringify(joke));
            const jokeDto = await this.mapper.mapAsync(autoData, joke_entity_1.Joke, joke_dto_1.JokeDto);
            result.data = jokeDto;
            return result;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
JokesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(joke_entity_1.Joke.name)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [mongoose_2.Model, Object])
], JokesService);
exports.JokesService = JokesService;
//# sourceMappingURL=joke.service.js.map