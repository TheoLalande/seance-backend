import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { PUB_KEY_PATH } from "../config/dotenv";

export default async function login(req: Request, res: Response) {
  const token = req.headers.authorization.split(" ")[1];
  //   const token = req.headers.authorization;
  jwt.verify(token, PUB_KEY_PATH, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      return res.status(200).json(decoded);
    }
  });
}
