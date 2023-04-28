import { Router, Request, Response } from "express";
import getPlantsByUser from "../../controllers/plants/getPlantsByUser";
import postAddPlant from "../../controllers/plants/postAddPlant";
import getPlantsByAnnonce from "../../controllers/plants/getPlantsByAnnonce";
import delPlantById from "../../controllers/plants/delPlantById";
import getPlantsByAnnonceAndUser from "../../controllers/plants/getPlantsByAnnonceAndUser";
import { postAddAdvice } from "../../controllers/plants/postAddAdvice";
import { getAdviceByPlantId } from "../../controllers/plants/getAdvice";
import { getAllAdvice } from "../../controllers/plants/getAllAdvices";

export const plantsRoute = Router();

plantsRoute.route("/plantsByUser").get(getPlantsByUser);
plantsRoute.route("/plantsByAnnonce").get(getPlantsByAnnonce);
plantsRoute.route("/plantsByAnnonceAndUser").get(getPlantsByAnnonceAndUser);
plantsRoute.route("/adviceByPlantId").get(getAdviceByPlantId);
plantsRoute.route("/getAllAdvices").get(getAllAdvice);

plantsRoute.route("/addPlant").post(postAddPlant);
plantsRoute.route("/delPlant").post(delPlantById);
plantsRoute.route("/delPlant").post(delPlantById);
plantsRoute.route("/addAdvice").post(postAddAdvice);
