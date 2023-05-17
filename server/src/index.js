import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import connectToDatabase from "./config/database.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectToDatabase()
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
// app.use(notFound);
// app.use(errorHandler);

//routes
app.use("/api/users", userRoute);

app.listen(port, () => console.log("Server is already running..."));
