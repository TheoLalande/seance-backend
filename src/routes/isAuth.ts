import { Router, Request, Response } from "express";
import isAuth from "../middleware/isAuth";

export const isAuthRoute = Router();

isAuthRoute.route("/").get(isAuth);
