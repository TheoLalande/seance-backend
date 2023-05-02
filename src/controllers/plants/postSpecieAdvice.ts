import { Request, Response } from "express";
import db from "../../data/data";

export async function postAddSpecieAdvice(req: Request, res: Response) {
  try {
    const { userId, specieId, advice} = req.body;
        if (userId && specieId && advice) {
      db.run(
        "INSERT INTO SpecieAdvices(userId, specieId, advice) VALUES(?,?,?)",
        [userId, specieId, advice]
      );
      return res
        .status(200)
        .json({ status: 200, message: "Advice created ! :)" });
    } else res.status(400).json({ status: 400, message: "Missing parameters" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
}
