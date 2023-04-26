import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export default async function getPlantsByAnnonceAndUser(
  req: Request,
  res: Response
) {
  try {
    const { annonceId, ownerId } = req.query;
    await db.all(
      "SELECT * FROM Plants WHERE annonceId = ? AND ownerId = ?",
      [annonceId, ownerId],
      (err, data) => {
        if (data[0] === undefined)
          return res.status(404).json({
            status: 404,
            message: "No plants found for this user and this annonce",
          });
        else return res.status(200).json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
