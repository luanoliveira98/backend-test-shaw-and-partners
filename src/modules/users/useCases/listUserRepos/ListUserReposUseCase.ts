import { Repo } from "../../entities/Repo";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  username: string;
}

class ListUserReposUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ username }:IRequest): Promise<Repo[]> {
    const repos = [];
    let page = 1;
    do {
      const reposByPage = await this.usersRepository.findRepos({ username, page });
      console.log(Object.keys(reposByPage).length)
      
      if(Object.keys(reposByPage).length < 0) break;

      repos.push(reposByPage);

      page++;
    } while (1 === 1);

    return repos;
  }
}

export { ListUserReposUseCase }