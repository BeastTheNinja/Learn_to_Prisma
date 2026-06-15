import express from "express";
import userRoutes from "./routes/user.routes";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/auth", authRoutes);


export default app;