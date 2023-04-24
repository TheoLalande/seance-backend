import { Request, Response } from "express";
import db from "../../data/data";

export default async function postAddPlant(req: Request, res: Response) {
  try {
    const { ownerId, plantName, plantDescription, plantPicture } = req.body;
    if (ownerId && plantName && plantDescription && plantPicture) {
      db.run(
        "INSERT INTO Plants(ownerId, plantName, plantDescription, plantPicture) VALUES(?,?,?, ?)",
        [ownerId, plantName, plantDescription, plantPicture]
      );
      return res
        .status(200)
        .json({ status: 200, message: "Plant created ! :)" });
    } else res.status(400).json({ status: 400, message: "Missing parameters" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
}
