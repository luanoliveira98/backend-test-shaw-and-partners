import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  username: string;
}

class ShowUserDetailsUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({ username }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByUsername(username);
    
    return user;
  }
}

export { ShowUserDetailsUseCase }