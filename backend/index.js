import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import {connectToDB} from "./DB/connectToDB.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors"
const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);

app.listen(process.env.PORT, () => {
  connectToDB();
  console.log("server starting");
});
