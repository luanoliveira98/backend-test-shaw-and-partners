import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserDetailsUseCase } from "./ShowUserDetailsUseCase";
import { ShowUserDetailsController } from "./ShowUserDetailsController";

const usersRepository = new UsersRepository();
const showUserDetailsUseCase = new ShowUserDetailsUseCase(usersRepository);
const showUserDetailsController = new ShowUserDetailsController(showUserDetailsUseCase);

export { showUserDetailsController }