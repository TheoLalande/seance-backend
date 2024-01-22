import { Request, Response } from "express";
import db from "./data";

export default function setConfigDatabase(req: Request, res: Response) {
  try {
    res.json("OK");
  } catch (error) {
    console.log(error);
  }
}
