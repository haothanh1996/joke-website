"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeModule = void 0;
const common_1 = require("@nestjs/common");
const joke_service_1 = require("./joke.service");
const joke_controller_1 = require("./joke.controller");
const joke_entity_1 = require("./entities/joke.entity");
const mongoose_1 = require("@nestjs/mongoose");
const joke_mapper_1 = require("./mapper/joke.mapper");
let JokeModule = class JokeModule {
};
JokeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: joke_entity_1.Joke.name, schema: joke_entity_1.JokeSchema }]),
        ],
        controllers: [joke_controller_1.JokesController],
        providers: [joke_service_1.JokesService, joke_mapper_1.JokeMapper],
    })
], JokeModule);
exports.JokeModule = JokeModule;
//# sourceMappingURL=joke.module.js.map