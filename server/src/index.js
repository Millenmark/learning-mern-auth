import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/users", userRoute)

app.listen(port, () => console.log("Server is already running..."));
