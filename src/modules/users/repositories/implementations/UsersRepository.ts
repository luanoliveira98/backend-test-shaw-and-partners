require('dotenv').config();
import axios from "axios";
import { ErrorHandling } from "../../../../utils/ErrorHandling";

import { User } from "../../entities/User";
import { IUsersRepository, IListUserDTO } from "../IUsersRepository";

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
}

export { UsersRepository }