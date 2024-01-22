import { Router, Request, Response } from "express";

import { postShow } from "../../controllers/shows/postAddShow";
import { getAllShows } from "../../controllers/shows/getAllShow";
import { postUpdateShow } from "../../controllers/shows/postUpdateShow";
import { getShowById, getShowByName } from "../../controllers/shows/getShowByCriteria";

export const showsRoute = Router();

showsRoute.route("/addShow").post(postShow);
showsRoute.route("/getAllShows").get(getAllShows);
showsRoute.route("/getShowById").get(getShowById);
showsRoute.route("/getShowByName").get(getShowByName);
showsRoute.route("/postUpdateShow").post(postUpdateShow);


