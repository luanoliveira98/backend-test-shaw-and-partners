import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

interface IRequestQuery {
  since: number
}

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase){}

  async handle(request: Request<{}, {}, {}, IRequestQuery>, response: Response): Promise<Response> {
    const { since } = request.query;

    try {
      const users = await this.listUsersUseCase.execute({ since });
      return response.json(users);
    } catch ({ message }) {
      return response.status(500).json({ error: message })
    }
  }
}

export { ListUsersController };