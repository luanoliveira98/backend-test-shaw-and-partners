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
}

export { UsersRepository }