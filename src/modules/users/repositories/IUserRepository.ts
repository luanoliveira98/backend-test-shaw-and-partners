import { User } from "../entities/User";

interface IListUserDTO {
  since: number
}
interface IUsersRepository {
  list({ since }: IListUserDTO): Promise<User[]>;
}

export { IUsersRepository, IListUserDTO }