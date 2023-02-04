require('dotenv').config();
import axios from "axios";

import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.GITHUB_API_URL;
  }

  list():Promise<User[]> {
    const users = axios.get(`${this.baseUrl}/users`).then((response) => response.data);
    return users;
  }
}

export { UsersRepository }