import { Router, Request, Response } from "express";
import getAnnoncesByUser from "../../controllers/annonces/getAnnoncesByUser";

export const annoncesRoute = Router();

annoncesRoute.route("/annoncesByUser").get(getAnnoncesByUser);
