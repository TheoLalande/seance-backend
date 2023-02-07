import * as express from "express";
import { Application, Request, Response } from "express";
import { usersRoute } from "../routes/Users/users";
import { configDatabaseRoute } from "../routes/configDatabase";
import db from '../data/data'


const app: Application = express();
db.on


app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello mec");
});

app.use("/todos", usersRoute);
app.use("/database", configDatabaseRoute)

export default app;
