import express from "express";
import { Constants } from "./utils/constant.js";
import connectDB from "./db/db.connect.js";
// routes
import todoRouter from "./routers/todo.router.js";

const app = express();

app.use(express.json());

// Connect to MongoDB database
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/api/todo", todoRouter);

app.listen(Constants.PORT, () => {
    console.log("Server is running on port", Constants.PORT);
})