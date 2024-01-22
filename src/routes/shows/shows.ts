import { Router } from "express";

import { postAddShow } from "../../controllers/shows/postAddShow";
import { getAllShows } from "../../controllers/shows/getAllShow";
import { postUpdateShow } from "../../controllers/shows/postUpdateShow";
import { getShowById, getShowByName } from "../../controllers/shows/getShowByCriteria";

export const showsRoute = Router();

showsRoute.route("/postAddShow").post(postAddShow);
showsRoute.route("/getAllShows").get(getAllShows);
showsRoute.route("/getShowById").get(getShowById);
showsRoute.route("/getShowByName").get(getShowByName);
showsRoute.route("/postUpdateShow").post(postUpdateShow);


