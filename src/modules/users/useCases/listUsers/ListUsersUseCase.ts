import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
  since: number
}

interface IResponse {
  next_page: string;
  users: User[]
}

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ since }: IRequest): Promise<IResponse> {
    const users = await this.usersRepository.list({ since });

    const user = users.slice(-1)[0];

    const usersResponse = {
      next_page: `/api/users?since=${user.id}`,
      users
    };

    return usersResponse;
  }
}

export { ListUsersUseCase };