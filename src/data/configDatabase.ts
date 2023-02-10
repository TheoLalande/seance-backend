import { Request, Response } from "express";
import db from "./data";

export default function setConfigDatabase(req: Request, res: Response) {
  try {
    // Mettre les Modifs Ici
    //db.run('CREATE TABLE Users(userId INTEGER PRIMARY KEY ASC AUTOINCREMENT NOT NULL, userPseudo VARCHAR(20) NOT NULL, userMail VARCHAR(30) NOT NULL, userPassword VARCHAT(30) NOT NULL)')
    res.json("OK");
  } catch (error) {
    console.log(error);
  }
}
