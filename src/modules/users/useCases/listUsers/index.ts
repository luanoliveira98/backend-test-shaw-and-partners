import { GitHubApiConnection } from "../../../../connections/implementations/GitHubApiConnection";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const gitHubApiConnection = new GitHubApiConnection();
const usersRepository = new UsersRepository(gitHubApiConnection);
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };