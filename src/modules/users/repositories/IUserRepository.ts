import { User } from "../entities/User";

interface IListUserDTO {
  since: any
}
interface IUsersRepository {
  list({ since }: IListUserDTO): Promise<User[]>;
  findByUsername(username: string): Promise<User>;
}

export { IUsersRepository, IListUserDTO }