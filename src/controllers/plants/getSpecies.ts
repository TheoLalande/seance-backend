import { Request, Response } from "express";
import db from "../../data/data";

// Cette route récupère toutes les espèces de plantes

export async function getAllSpecies(req: Request, res: Response) {
  try {
    await db.all(
      "SELECT * FROM PlantSpecies",
      (err, data) => {
        if (data[0] === undefined)
          return res
            .status(404)
            .json({ status: 404, message: "No plants found for this user" });
        else return res.status(200).json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
