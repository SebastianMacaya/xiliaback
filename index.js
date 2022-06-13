import express from "express";
import morgan from "morgan";
import routes from "./src/routes/routes.js";
const PORT = 8080;
import cors from "cors";
import "./src/db.js";
import dotenv from "dotenv";
dotenv.config();
//middleware
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || PORT, () => {
  console.log("Server on localhost:" + PORT);
});
