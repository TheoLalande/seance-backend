import { Router, Request, Response } from "express";
import getPlantsByUser from "../../controllers/plants/getPlantsByUser";
import postAddPlant from "../../controllers/plants/postAddPlant";
import getPlantsByAnnonce from "../../controllers/plants/getPlantsByAnnonce";

export const plantsRoute = Router();

plantsRoute.route("/plantsByUser").get(getPlantsByUser);
plantsRoute.route("/plantsByAnnonce").get(getPlantsByAnnonce);
plantsRoute.route("/addPlant").post(postAddPlant);
