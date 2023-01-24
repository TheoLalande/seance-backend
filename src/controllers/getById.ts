import { database } from "../database";
import { Request, Response } from "express";
const collection = database.todos;

export async function getById(req: Request, res: Response) {
  try {
    const reqParsed = parseInt(req.params.id, 10);
    const data = collection.filter((todo) => todo.id === reqParsed);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
}
