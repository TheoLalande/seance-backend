import { Router, Request, Response } from "express";
import getAll from "../../controllers/Users/getAll";
import login from "../../controllers/Users/login";
import { postInfo } from "../../controllers/Users/postInfo";
import getUserById from "../../controllers/Users/getUserById";

export const usersRoute = Router();

usersRoute.route("/").get(getAll);

usersRoute.route("/id").get(getUserById);

usersRoute.route("/login").post(login);

usersRoute.route("/").post(postInfo);
