import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listUsersUseCase.execute();
      return response.json(users);
    } catch ({ message }) {
      return response.status(500).json({ error: message })
    }
  }
}

export { ListUsersController };