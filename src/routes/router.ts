import { Router, Request, Response } from "express";
import { getAll } from "../controllers/getAll";
import { postInfo } from "../controllers/postInfo";
import { getById } from "../controllers/getById";

export const myRouter = Router();

myRouter.route("/").get(getAll);

myRouter.route("/").post(postInfo);

myRouter.route("/:id").get(getById);
