import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export default async function getAllAnnonces(req: Request, res: Response) {
  try {
    await db.all("SELECT * FROM Annonces", (err, data) => {
      if (data[0] === undefined)
        return res
          .status(404)
          .json({ status: 404, message: "No annonce found for this user" });
      else return res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
  }
}
