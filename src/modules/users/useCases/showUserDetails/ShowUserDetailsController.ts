import { Request, Response } from 'express';
import { ShowUserDetailsUseCase } from "./ShowUserDetailsUseCase";

class ShowUserDetailsController {
  constructor(private ShowUserDetailsUseCase: ShowUserDetailsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    try {
      const user = await this.ShowUserDetailsUseCase.execute({ username });
      return response.json(user);
    } catch ({ code = 500, message }) {
      return response.status(code).json({ error: message })
    }
  }
}

export { ShowUserDetailsController };