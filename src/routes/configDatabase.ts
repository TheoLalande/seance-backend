import { Router, Request, Response } from "express";
import setConfigDatabase from "../data/configDatabase";

export const configDatabaseRoute = Router();

configDatabaseRoute.route("/").get(setConfigDatabase);

