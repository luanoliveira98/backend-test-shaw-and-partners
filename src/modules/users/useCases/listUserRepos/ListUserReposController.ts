import { Request, Response } from 'express';
import { ListUserReposUseCase } from './ListUserReposUseCase';

class ListUserReposController {
  constructor(private listUserReposUseCase: ListUserReposUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    try {
      const repos = await this.listUserReposUseCase.execute({ username });
      return response.json(repos);
    } catch ({ status = 500, message }) {
      return response.status(status).json({ error: message })
    }
  }
}

export { ListUserReposController };