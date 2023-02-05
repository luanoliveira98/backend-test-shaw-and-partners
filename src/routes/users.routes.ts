import { Router } from "express";
import { listUsersController } from "../modules/users/useCases/listUsers";
import { showUserDetailsController } from "../modules/users/useCases/showUserDetails";

const usersRoutes = Router();

usersRoutes.get('/', (request, response) => {
  return listUsersController.handle(request, response);
})

usersRoutes.get('/:username/details', (request, response) => {
  return showUserDetailsController.handle(request, response);
})

export { usersRoutes };