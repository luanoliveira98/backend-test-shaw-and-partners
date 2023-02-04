import { Router } from "express";
import { listUsersController } from "../modules/users/useCases/listUsers";

const usersRoutes = Router();

usersRoutes.get('/', (request, response) => {
  return listUsersController.handle(request, response);
})

export { usersRoutes };