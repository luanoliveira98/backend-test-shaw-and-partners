import { Repo } from "../entities/Repo";
import { User } from "../entities/User";

interface IListUserDTO {
  since: any
}

interface IFindReposDTO {
  username: string;
  page: number;
}

interface IUsersRepository {
  list({ since }: IListUserDTO): Promise<User[]>;
  findByUsername(username: string): Promise<User>;
  findRepos({ username, page }: IFindReposDTO): Promise<Repo[]>;
}

export { IUsersRepository, IListUserDTO, IFindReposDTO }