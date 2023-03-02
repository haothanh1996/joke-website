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
exports.JokesController = void 0;
const common_1 = require("@nestjs/common");
const joke_service_1 = require("./joke.service");
const create_joke_dto_1 = require("./dto/create-joke.dto");
const update_joke_dto_1 = require("./dto/update-joke.dto");
const swagger_1 = require("@nestjs/swagger");
const reaction_joke_dto_1 = require("./dto/reaction-joke.dto");
let JokesController = class JokesController {
    constructor(jokesService) {
        this.jokesService = jokesService;
    }
    async createJoke(res, createJokeDto) {
        const result = await this.jokesService.createJoke(createJokeDto);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async getJokes(res) {
        const result = await this.jokesService.getJokes();
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async getJoke(res, id) {
        const result = await this.jokesService.getJoke(id);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async updateJoke(res, id, updateDto) {
        const result = await this.jokesService.updateJoke(id, updateDto);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async reaction(res, id, reactionDto) {
        const result = await this.jokesService.reaction(id, reactionDto);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_joke_dto_1.CreateJokeDto]),
    __metadata("design:returntype", Promise)
], JokesController.prototype, "createJoke", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JokesController.prototype, "getJokes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], JokesController.prototype, "getJoke", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_joke_dto_1.UpdateJokeDto]),
    __metadata("design:returntype", Promise)
], JokesController.prototype, "updateJoke", null);
__decorate([
    (0, common_1.Put)(':id/reaction'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, reaction_joke_dto_1.ReactionJokeDto]),
    __metadata("design:returntype", Promise)
], JokesController.prototype, "reaction", null);
JokesController = __decorate([
    (0, swagger_1.ApiTags)('jokes'),
    (0, common_1.Controller)('jokes'),
    __metadata("design:paramtypes", [joke_service_1.JokesService])
], JokesController);
exports.JokesController = JokesController;
//# sourceMappingURL=joke.controller.js.map