import { database } from "../database";
import { Request, Response } from "express";

export async function getAll(req: Request, res: Response) {
  try {
    const data = await database.todos;
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
}
