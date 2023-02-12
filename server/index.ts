import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { formRoutes } from "./routes/FormRoute";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/vocally")
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api", formRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
