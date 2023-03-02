import { JokesService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { ReactionJokeDto } from './dto/reaction-joke.dto';
export declare class JokesController {
    private readonly jokesService;
    constructor(jokesService: JokesService);
    createJoke(res: any, createJokeDto: CreateJokeDto): Promise<any>;
    getJokes(res: any): Promise<any>;
    getJoke(res: any, id: string): Promise<any>;
    updateJoke(res: any, id: string, updateDto: UpdateJokeDto): Promise<any>;
    reaction(res: any, id: string, reactionDto: ReactionJokeDto): Promise<any>;
}
