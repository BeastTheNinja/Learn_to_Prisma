import app from "./app";

app.listen(process.env.PORT, () => {
    console.log("Express server kører på port " + process.env.PORT);
});