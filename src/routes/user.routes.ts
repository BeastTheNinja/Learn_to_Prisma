import { Router } from "express";
import UserController from "../controllers/user.controller";


const routes = Router();

// Hent alle brugere
routes.get("/", UserController.getAllUsers);

// Hent bruger
routes.get("/:id", UserController.getUserById);

// Opret bruger
routes.post("/", UserController.createUser);

// Opdater bruger
routes.put("/:id", UserController.updateUser);

// Slet bruger
routes.delete("/:id", UserController.deleteUser);



export default routes;