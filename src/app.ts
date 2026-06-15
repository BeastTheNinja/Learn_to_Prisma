import express from "express";
import userRoutes from "./routes/user.routes";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
    console.log("Express server kører på port " + process.env.PORT);
});
