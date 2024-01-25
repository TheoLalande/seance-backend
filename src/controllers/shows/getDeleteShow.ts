import { Request, Response } from "express";
import db from "../../data/data";

export async function getDeleteShow(req: Request, res: Response) {
  try {
    const { id } = req.query;
    await db.run("DELETE FROM shows WHERE id= ?", [id], (err, data) => {
      return res
        .status(200)
        .json({ status: 200, message: "Show deleted" });
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json("ERROR");

  }
}
