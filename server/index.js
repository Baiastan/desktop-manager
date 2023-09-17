import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import linksRoute from "./routes/links.js";
import todosRoute from "./routes/todos.js";
import sendNotifications from "./routes/sendNotifications.js";

//Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES

app.use("/api", linksRoute);
app.use("/api", todosRoute);
app.use("/api", sendNotifications);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`SERVER PORT ${PORT}...`);
});
