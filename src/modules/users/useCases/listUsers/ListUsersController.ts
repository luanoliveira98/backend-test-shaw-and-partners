import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";
class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
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