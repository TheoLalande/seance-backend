import * as express from "express";
import { Application, Request, Response } from "express";
import { annoncesRoute } from "../routes/annonces/annonces";
import * as cors from "cors";
import { configDatabaseRoute } from "../routes/configDatabase";
import db from "../data/data";
import { usersRoute } from "../routes/Users/users";
import { showsRoute } from "../routes/shows/shows";

const app: Application = express();
db.on;

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Helloa mec");
});

app.use("/annonce", annoncesRoute);
app.use("/database", configDatabaseRoute);
app.use("/user", usersRoute);
app.use("/shows", showsRoute);

export default app;
