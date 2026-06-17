import { Router } from "express";
import UserController from "../controllers/user.controller";
import { jwtMiddleware } from "../middleware/jwt.middleware";
import { adminMiddleware } from "../middleware/admin.middleware";


const routes = Router();

// Hent alle brugere
routes.get("/", jwtMiddleware, adminMiddleware, UserController.getAllUsers);

// Hent bruger
routes.get("/:id", jwtMiddleware, UserController.getUserById);

// Opret bruger
routes.post("/", jwtMiddleware, UserController.createUser);

// Opdater bruger
routes.put("/:id", jwtMiddleware, UserController.updateUser);

// Slet bruger
routes.delete("/:id", jwtMiddleware, adminMiddleware, UserController.deleteUser);



export default routes;