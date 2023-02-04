import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): Promise<User[]> {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };