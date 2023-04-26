import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export async function delAnnonceById(req: Request, res: Response) {
  try {
    const { ID } = req.body;
    await db.all("DELETE FROM Annonces WHERE ID = ?", [ID], (err, data) => {
      return res.status(200).json("Annonce deleted !");
    });
  } catch (error) {
    console.log(error);
  }
}
