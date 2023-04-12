import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { PUB_KEY_PATH, PRI_KEY_PATH } from "../../config/dotenv";
import db from "../../data/data";
import * as CryptoJS from "crypto-js";

export default async function login(req: Request, res: Response) {
  try {
    const { userPseudo, userPassword } = req.body;
    const userDecodedPassword = decodePassword(userPassword);
    await db.get(
      // Cette methode renvoie True si l'utilisateur existe, False sinon
      "SELECT * FROM Users WHERE userPseudo =  ?",
      [userPseudo],
      (err, data) => {
        if (
          data === undefined ||
          decodePassword(data.userPassword) != userDecodedPassword
        ) {
          return res.status(401).json(false);
        } else if (decodePassword(data.userPassword) === userDecodedPassword) {
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
    return res.status(401).json(error);
  }
}

// Fonction qui sert a Décoder le mot de passe pour verifier si les ID sont les bons
function decodePassword(userPassword: String) {
  const decrypted = CryptoJS.AES.decrypt(userPassword, PUB_KEY_PATH);
  const userDecodePassword: String = JSON.parse(
    decrypted.toString(CryptoJS.enc.Utf8)
  );
  return userDecodePassword;
}
