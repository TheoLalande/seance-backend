import { Request, Response } from "express";
import db from "../../data/data";

export async function getAllAdvice(req: Request, res: Response) {
  try {
    await db.all(
      "SELECT Plants.plantName, Plants.plantDescription, Plants.plantPicture, PlantsAdvice.advice FROM Plants LEFT JOIN PlantsAdvice ON Plants.ID = PlantsAdvice.plantId",
      (err, data) => {
        if (data[0] === undefined)
          return res
            .status(404)
            .json({ status: 404, message: "No plants found for this user" });
        else return res.status(200).json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
