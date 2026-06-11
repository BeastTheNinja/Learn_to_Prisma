import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API virker!");
});

app.listen(3000, () => {
    console.log("Server kører på port 3000");
});