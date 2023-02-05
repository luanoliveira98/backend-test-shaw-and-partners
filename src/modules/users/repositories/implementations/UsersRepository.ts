require('dotenv').config();
import axios from "axios";

import { User } from "../../entities/User";
import { IUsersRepository, IListUserDTO } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.GITHUB_API_URL;
  }

  list({ since }: IListUserDTO):Promise<User[]> {
    const users = axios.get(`${this.baseUrl}/users?since=${since}`).then((response) => response.data);
    return users;
  }

  findByUsername(username: string): Promise<User> {
    const user = axios.get(`${this.baseUrl}/users/${username}`)
      .then((response) => response.data)
      .catch((err) => {
        const error = {
          code: err.response.status,
          message: err.response.data.message
        }

        throw error;
      });
    return user;
  }
}

export { UsersRepository }