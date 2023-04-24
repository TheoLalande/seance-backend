import { Request, Response } from "express";
import db from "../../data/data";

export default async function postAddAnnonce(req: Request, res: Response) {
  try {
    const {
      ownerId,
      startDate,
      endDate,
      plantCount,
      annonceDescription,
      location,
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
        "INSERT INTO Annonces(ownerId, startDate, endDate, plantCount, annonceDescription, location) VALUES(?,?,?,?, ?, ?)",
        [ownerId, startDate, endDate, plantCount, annonceDescription, location]
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
