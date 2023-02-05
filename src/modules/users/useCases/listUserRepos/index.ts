import { GitHubApiConnection } from "../../../../connections/implementations/GitHubApiConnection";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUserReposController } from "./ListUserReposController";
import { ListUserReposUseCase } from "./ListUserReposUseCase";

const gitHubApiConnection = new GitHubApiConnection();
const usersRepository = new UsersRepository(gitHubApiConnection);
const listUserReposUseCase = new ListUserReposUseCase(usersRepository);
const listUserReposController = new ListUserReposController(listUserReposUseCase);

export { listUserReposController };