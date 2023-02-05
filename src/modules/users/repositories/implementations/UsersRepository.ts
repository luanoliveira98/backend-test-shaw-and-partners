require('dotenv').config();
import axios from "axios";
import { ErrorHandling } from "../../../../utils/ErrorHandling";
import { Repo } from "../../entities/Repo";

import { User } from "../../entities/User";
import { IUsersRepository, IListUserDTO, IFindReposDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.GITHUB_API_URL;
  }

  list({ since }: IListUserDTO):Promise<User[]> {
    const users = axios.get(`${this.baseUrl}/users?since=${since}`)
      .then((response) => response.data)
      .catch((err) => {
        ErrorHandling.throwError({
          status: err.response.status,
          message: err.response.data.message
        });
      });
    return users;
  }

  findByUsername(username: string): Promise<User> {
    const user = axios.get(`${this.baseUrl}/users/${username}`)
      .then((response) => response.data)
      .catch((err) => {
        ErrorHandling.throwError({
          status: err.response.status,
          message: err.response.data.message
        });
      });
    return user;
  }

  findRepos({ username, page }: IFindReposDTO): Promise<Repo[]> {
    const repos = axios.get(`${this.baseUrl}/users/${username}/repos?per_page=100&page=${page}`)
      .then((response) => response.data)
      .catch((err) => {
        ErrorHandling.throwError({
          status: err.response.status,
          message: err.response.data.message
        });
      });
    return repos;
  }
}

export { UsersRepository }