import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export async function getShowById(req: Request, res: Response) {
  try {
    const { id } = req.query;
    await db.all("SELECT * FROM shows WHERE ID = ?", [id], (err, data) => {
      if (data[0] === undefined)
        return res
          .status(404)
          .json({ status: 404, message: "No annonce found for this ID" });
      else return res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getShowByName(req: Request, res: Response) {
  try {
    const { movie } = req.query;

    await db.all("SELECT * FROM shows WHERE movie = ?", [movie], (err, data) => {
      if (data[0] === undefined)
        return res
          .status(404)
          .json({ status: 404, message: "No annonce found for this name" });
      else return res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
  }
}

export default { getShowById, getShowByName };
