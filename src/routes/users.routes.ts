import { Router } from "express";
import { listUserReposController } from "../modules/users/useCases/listUserRepos";
import { listUsersController } from "../modules/users/useCases/listUsers";
import { showUserDetailsController } from "../modules/users/useCases/showUserDetails";

const usersRoutes = Router();

usersRoutes.get('/', (request, response) => {
  return listUsersController.handle(request, response);
})

usersRoutes.get('/:username/details', (request, response) => {
  return showUserDetailsController.handle(request, response);
})

usersRoutes.get('/:username/repos', (request, response) => {
  return listUserReposController.handle(request, response);
})

export { usersRoutes };