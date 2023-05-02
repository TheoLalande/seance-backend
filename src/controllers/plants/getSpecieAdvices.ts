import { Request, Response } from "express";
import db from "../../data/data";

// Cette route récupère toutes les espèces de plantes avec leur Commentaires et leur utilisateurs

export async function getAllSpecieAdvices(req: Request, res: Response) {
  try {
    await db.all(
      "SELECT SpecieAdvices.advice, Users.userPseudo, PlantSpecies.name, SpecieAdvices.rate FROM SpecieAdvices JOIN PlantSpecies ON SpecieAdvices.specieId = PlantSpecies.ID JOIN Users ON SpecieAdvices.userId = Users.userId",
      (err, data) => {
        if (data[0] === undefined)
          return res
            .status(404)
            .json({ status: 404, message: "No Species found" });
        else return res.status(200).json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getSpecieAdvicesBySpecieId(req: Request, res: Response) {
  try {
    const { specieId } = req.query;
    await db.all(
      "SELECT SpecieAdvices.ID, SpecieAdvices.advice, Users.userPseudo, PlantSpecies.name, PlantSpecies.img, SpecieAdvices.rate FROM SpecieAdvices JOIN PlantSpecies ON SpecieAdvices.specieId = PlantSpecies.ID JOIN Users ON SpecieAdvices.userId = Users.userId WHERE PlantSpecies.ID = ?",
      [specieId],
      (err, data) => {
        if (data[0] === undefined)
          return res
            .status(404)
            .json({ status: 404, message: "No SpecieAdvice found for this ID" });
        else return res.status(200).json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
