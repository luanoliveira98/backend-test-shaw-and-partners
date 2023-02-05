import { GitHubApiConnection } from "../../../../connections/implementations/GitHubApiConnection";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserDetailsUseCase } from "./ShowUserDetailsUseCase";
import { ShowUserDetailsController } from "./ShowUserDetailsController";

const gitHubApiConnection = new GitHubApiConnection();
const usersRepository = new UsersRepository(gitHubApiConnection);
const showUserDetailsUseCase = new ShowUserDetailsUseCase(usersRepository);
const showUserDetailsController = new ShowUserDetailsController(showUserDetailsUseCase);

export { showUserDetailsController }