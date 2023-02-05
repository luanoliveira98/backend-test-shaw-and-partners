import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUserReposController } from "./ListUserReposController";
import { ListUserReposUseCase } from "./ListUserReposUseCase";

const usersRepository = new UsersRepository();
const listUserReposUseCase = new ListUserReposUseCase(usersRepository);
const listUserReposController = new ListUserReposController(listUserReposUseCase);

export { listUserReposController };