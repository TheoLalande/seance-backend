import { Router, Request, Response } from "express";
import getAnnoncesByUser from "../../controllers/annonces/getAnnoncesByUser";
import postAddAnnonce from "../../controllers/annonces/postAddAnnonce";
import getAllAnnonces from "../../controllers/annonces/getAllAnnonces";
import delAnnonceById from "../../controllers/annonces/delAnnonceById";

export const annoncesRoute = Router();

annoncesRoute.route("/annoncesByUser").get(getAnnoncesByUser);
annoncesRoute.route("/allAnnonces").get(getAllAnnonces);
annoncesRoute.route("/addAnnonce").post(postAddAnnonce);
annoncesRoute.route("/delAnnonce").post(delAnnonceById);
