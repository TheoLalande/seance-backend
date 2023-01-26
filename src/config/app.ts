import * as express from "express";
import { Application, Request, Response } from "express";
import { myRouter } from "../routes/router";
// import * as bodyParser from "body-parser";

const app: Application = express();
app.use(express.json());
// app.use(bodyParser.json({ limit: "50mb", type: "application/vnd.api+json" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello mec");
});

app.use("/todos", myRouter);

export default app;
