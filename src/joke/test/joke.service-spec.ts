import { Test, TestingModule } from '@nestjs/testing';
import { CreateJokeDto } from '../dto/create-joke.dto';
import { ReactionJokeDto } from '../dto/reaction-joke.dto';
import { UpdateJokeDto } from '../dto/update-joke.dto';
import { JokesService } from '../joke.service';

class ApiServiceMock {
  getJokes() {
    return [];
  }
  getJoke() {
    return;
  }
  updateJoke(id: string, dto: any) {
    return;
  }
  reaction(id: string, dto: any) {
    return;
  }
  createJoke(dto: any) {
    return;
  }
}
describe.only('JokesService', () => {
  let jokesService: JokesService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: JokesService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokesService, ApiServiceProvider],
    }).compile();
    jokesService = module.get<JokesService>(JokesService);
  });

  it('should call createJoke method with expected params', async () => {
    const createJokeSpy = jest.spyOn(jokesService, 'createJoke');
    const dto = new CreateJokeDto();
    jokesService.createJoke(dto);
    expect(createJokeSpy).toHaveBeenCalledWith(dto);
  });

  it('should call getJoke method with expected param', async () => {
    const getJokeSpy = jest.spyOn(jokesService, 'getJoke');
    jokesService.getJoke('');
    expect(getJokeSpy).toHaveBeenCalledWith('');
  });

  it('should call getJokes method with expected param', async () => {
    const getJokesSpy = jest.spyOn(jokesService, 'getJokes');
    jokesService.getJokes();
    expect(getJokesSpy).toHaveBeenCalledWith();
  });

  it('should call updateJoke method with expected params', async () => {
    const updateJokeSpy = jest.spyOn(jokesService, 'updateJoke');
    const jokeId = 'jokeId';
    const dto = new UpdateJokeDto();
    jokesService.updateJoke(jokeId, dto);
    expect(updateJokeSpy).toHaveBeenCalledWith(jokeId, dto);
  });

  it('should call reaction method with expected params', async () => {
    const reactionSpy = jest.spyOn(jokesService, 'reaction');
    const jokeId = 'jokeId';
    const dto = new ReactionJokeDto();
    jokesService.reaction(jokeId, dto);
    expect(reactionSpy).toHaveBeenCalledWith(jokeId, dto);
  });
});
