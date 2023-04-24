import { Router, Request, Response } from "express";
import getAll from "../../controllers/users/getAll";
import login from "../../controllers/users/login";
import { postInfo } from "../../controllers/users/postInfo";
import getUserById from "../../controllers/users/getUserById";
import postInscription from "../../controllers/users/postInscription";

export const usersRoute = Router();

usersRoute.route("/").get(getAll);

usersRoute.route("/id").get(getUserById);

usersRoute.route("/login").post(login);

usersRoute.route("/inscription").post(postInscription);

usersRoute.route("/").post(postInfo);
