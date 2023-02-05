import { Repo } from "../../entities/Repo";
import { User } from "../../entities/User";

import { IUsersRepository, IListUserDTO, IFindReposDTO } from "../IUsersRepository";

import { GitHubApiConnection } from "../../../../connections/implementations/GitHubApiConnection";

class UsersRepository implements IUsersRepository {

  constructor(private gitHubApiConnection: GitHubApiConnection) {}

  list({ since }: IListUserDTO):Promise<User[]> {
    const users = this.gitHubApiConnection.get(`/users?since=${since}`);
    return users;
  }

  findByUsername(username: string): Promise<User> {
    const user = this.gitHubApiConnection.get(`/users/${username}`);
    return user;
  }

  findRepos({ username, page }: IFindReposDTO): Promise<Repo[]> {
    const repos = this.gitHubApiConnection.get(`/users/${username}/repos?per_page=10&page=${page}`);
    return repos;
  }
}

export { UsersRepository }