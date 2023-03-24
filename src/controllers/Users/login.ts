import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { PRI_KEY_PATH } from "../../config/dotenv";
import db from "../../data/data";
export default async function login(req: Request, res: Response) {
  try {
    const { userPseudo, userPassword } = req.body;
    await db.get(
      // Cette methode renvoie True si l'utilisateur existe, False sinon
      "SELECT * FROM Users WHERE userPseudo =  ? AND userPassword = ?",
      [userPseudo, userPassword],
      (err, data) => {
        if (data === undefined) {
          return res.status(401).json(false);
        } else {
          const token: jwt = jwt.sign({ userId: data.userId }, PRI_KEY_PATH, {
            expiresIn: 3600, // 1h
            algorithm: "RS256",
          });
          return res.status(200).json(token);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
