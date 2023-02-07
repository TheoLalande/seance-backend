import { Router, Request, Response } from "express";
import getAll from "../../controllers/getAll";
import { postInfo } from "../../controllers/postInfo";
import { getById } from "../../controllers/getById";

export const usersRoute = Router();

usersRoute.route("/").get(getAll);

usersRoute.route("/").post(postInfo);

usersRoute.route("/:id").get(getById);
