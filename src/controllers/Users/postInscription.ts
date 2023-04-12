import { Request, Response } from "express";
import db from "../../data/data";

export default async function postInscription(req: Request, res: Response) {
  try {
    const { userPseudo, userPassword, userMail } = req.body;
    if (userPseudo && userPassword && userMail) {
      db.all(
        "SELECT COUNT(*) AS count FROM Users WHERE userPseudo = ? OR userMail = ?",
        [userPseudo, userMail],
        (err, data: any) => {
          if (data[0].count > 0)
            return res.status(404).json("Pseudo or Mail already used :(");
          else {
            db.run(
              "INSERT INTO Users(userPseudo, userMail, userPassword) VALUES(?,?, ?)",
              [userPseudo, userMail, userPassword]
            );
            return res
              .status(200)
              .json({ status: 200, message: "User created ! :)" });
          }
        }
      );
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "User or Mail Already exist :(" });
    }
  } catch (error) {
    return console.log(error);
  }
}
