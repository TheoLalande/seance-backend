import { Request, Response } from "express";
import db from '../data/data'


export async function postInfo(req: Request, res: Response) {
  try {
    await setDataBase()
    res.end()
  } catch (error) {
    console.log(error);
  }
}

function setDataBase() {
  db.run('INSERT INTO Users(userPseudo, userMail, userPassword) VALUES(?,?, ?)', ['Theo', 'Theo@gmail.com', 'mdp123'])
  // db.run('INSERT INTO Users(userPseudo, userMail, userPassword) VALUES(?,?, ?)', ['Antoine', 'antoine@gmail.com', 'mdp123'])
  // db.run('INSERT INTO Users(userPseudo, userMail, userPassword) VALUES(?,?, ?)', ['Axel', 'Axel@gmail.com', 'mdp123'])
  // db.run('INSERT INTO Users(userPseudo, userMail, userPassword) VALUES(?,?, ?)', ['Laurene', 'Lauren@gmail.com', 'mdp123'])
}