import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export default async function setAnnonceIdOnPlant(req: Request, res: Response) {
  try {
    const { ID, annonceID } = req.body;
    await db.all("SELECT * FROM Plants where ID = ?", [ID], (err, data) => {
      // On vérifie que la plante existe
      if (data[0] === undefined)
        return res
          .status(404)
          .json({ status: 404, message: "No plant found for this ID" });
    });
    await db.all(
      "UPDATE Plants SET annonceId = ?, WHERE ID = ?",
      [ID],
      (err) => {
        // On mets l'annonceID a jours
        if (err)
          res
            .status(500)
            .json({ status: 500, message: "Internal server error" });
        return res.status(200).json("AnnonceID Updated !");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
