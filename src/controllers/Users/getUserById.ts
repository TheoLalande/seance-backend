import { database } from "../../database";
import { Request, Response } from "express";
import db from "../../data/data";

export default async function getUserById(req: Request, res: Response) {
  try {
    await db.all(
      "SELECT * FROM Users WHERE userId = ?",
      [req.query.id],
      (err, data) => {
        return res.json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
