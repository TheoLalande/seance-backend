import { database } from "../database";
import { Request, Response } from "express";
import ITodo from "../types/ITodo";

const collection = database.todos;

export async function postInfo(req: Request, res: Response) {
  try {
    const todo: ITodo = req.body;
    return [...collection, todo];
  } catch (error) {
    console.log(error);
  }
}
