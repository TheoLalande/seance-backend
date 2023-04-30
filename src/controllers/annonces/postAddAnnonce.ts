import { Request, Response } from "express";
import db from "../../data/data";

export async function postAddAnnonce(req: Request, res: Response) {
  try {
    const {
      ownerId,
      startDate,
      endDate,
      plantCount,
      annonceDescription,
      location,
      annonceTitle,
      annoncePicture,
    } = req.body;
    if (
      ownerId &&
      startDate &&
      endDate &&
      plantCount &&
      annonceDescription &&
      location
    ) {
      db.run(
        "INSERT INTO Annonces(ownerId, startDate, endDate,annonceTitle, plantCount, annonceDescription, location, annoncePicture) VALUES(?,?,?,?,?,?,?,?)",
        [
          ownerId,
          startDate,
          endDate,
          annonceTitle,
          plantCount,
          annonceDescription,
          location || "",
          annoncePicture || "",
        ]
      );
      return res
        .status(200)
        .json({ status: 200, message: "Annonce created ! :)" });
    } else res.status(400).json({ status: 400, message: "Missing parameters" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
}
