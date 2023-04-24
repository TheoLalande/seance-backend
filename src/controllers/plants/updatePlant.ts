import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export default async function setAnnonceIdOnPlant(req: Request, res: Response) {
  try {
    const { ID, annonceID } = req.body;
    await db.all("DELETE FROM Plants WHERE ID = ?", [ID], (err, data) => {
      return res.status(200).json("Plant deleted !");
    });
  } catch (error) {
    console.log(error);
  }
}
