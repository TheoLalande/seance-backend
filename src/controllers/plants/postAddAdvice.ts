import { Request, Response } from "express";
import db from "../../data/data";

export async function postAddAdvice(req: Request, res: Response) {
  try {
    const { plantId, advice } = req.body;
    if (plantId && advice) {
      db.run("INSERT INTO PlantsAdvice(plantId, advice) VALUES(?,?)", [
        plantId,
        advice,
      ]);
      return res
        .status(200)
        .json({ status: 200, message: "Advice posted ! :)" });
    } else res.status(400).json({ status: 400, message: "Missing parameters" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
}
