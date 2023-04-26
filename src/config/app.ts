import * as express from "express";
import { Application, Request, Response } from "express";
import { plantsRoute } from "../routes/plants/plants";
import { annoncesRoute } from "../routes/annonces/annonces";
import * as cors from "cors";
import { configDatabaseRoute } from "../routes/configDatabase";
import db from "../data/data";
import { isAuthRoute } from "../routes/isAuth";
import { usersRoute } from "../routes/users/users";

const app: Application = express();
db.on;

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Helloa mec");
});

app.use("/isAuth", isAuthRoute); // MiddleWare
app.use("/plant", plantsRoute);
app.use("/annonce", annoncesRoute);
app.use("/database", configDatabaseRoute);

export default app;
