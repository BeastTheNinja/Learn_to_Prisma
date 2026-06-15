import { Router } from "express";
import UserController from "../controllers/user.controller";
import { jwtMiddleware } from "../middleware/jwt.middleware";


const routes = Router();

// Hent alle brugere
routes.get("/", jwtMiddleware, UserController.getAllUsers);

// Hent bruger
routes.get("/:id", jwtMiddleware, UserController.getUserById);

// Opret bruger
routes.post("/", jwtMiddleware, UserController.createUser);

// Opdater bruger
routes.put("/:id", jwtMiddleware, UserController.updateUser);

// Slet bruger
routes.delete("/:id", jwtMiddleware, UserController.deleteUser);



export default routes;