import { Repo } from "../../entities/Repo";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  username: string;
}

class ListUserReposUseCase {
  private repos_per_page: number = 10;

  constructor(private usersRepository: UsersRepository) {}

  async execute({ username }:IRequest): Promise<Repo[]> {
    let page = 1;
    let repos;

    do {
      const reposByPage = await this.usersRepository.findRepos({ username, page });

      console.log(Object.keys(reposByPage).length);

      repos = (page === 1) ? reposByPage : repos.concat(reposByPage);

      if(Object.keys(reposByPage).length < this.repos_per_page) break;

      page++;
    } while (1 === 1);

    return repos;
  }
}

export { ListUserReposUseCase }