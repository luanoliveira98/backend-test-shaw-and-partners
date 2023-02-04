import { User } from "../entities/User";

interface IUsersRepository {
  list(): Promise<User[]>;
}

export { IUsersRepository }