import * as express from "express";
import { Application, Request, Response } from "express";
import * as cors from "cors";
import { configDatabaseRoute } from "../routes/configDatabase";
import db from "../data/data";
import { showsRoute } from "../routes/shows/shows";

const app: Application = express();
db.on;

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenue");
});

app.use("/database", configDatabaseRoute);
app.use("/shows", showsRoute);

export default app;
