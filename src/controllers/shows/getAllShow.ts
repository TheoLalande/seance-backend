import { Request, Response } from "express";
import db from "../../data/data";

export async function getAllShows(req: Request, res: Response) {
  try {
    console.log("IN TRy");

    await db.all("SELECT * FROM shows", (err, data) => {
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
