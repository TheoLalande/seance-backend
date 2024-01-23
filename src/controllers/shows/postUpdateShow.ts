import { Request, Response } from "express";
import db from "../../data/data";
import checkIfShowIsValid from "./utils";

export async function postUpdateShow(req: Request, res: Response) {
  // let isShowValid = true

  try {
    const {
      id,
      movie,
      ticketLeft,
      room,
      date,
      time,
      language,
      duration
    } = req.body;
    // const isShowValid = await checkIfShowIsValid(room, date, time, duration)
    if (id && movie && ticketLeft && room && date && time && language) {
      // if (!isShowValid) {
      //   return res.status(400).json({ status: 400, message: "La salle n'est pas disponible à ces dates la" });
      // }
      const sqlQuery = `
        UPDATE shows 
        SET movie='${movie}', ticketLeft=${ticketLeft}, room='${room}', 
        date='${date}', time='${time}', language='${language}', duration='${duration}'
        WHERE ID=${id};
      `;
      db.run(sqlQuery, function (err) {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ status: 500, message: "Internal server error" });
        }

        return res.status(200).json({ status: 200, message: "Seance Updated ! :)" });
      });
    } else {
      res.status(400).json({ status: 400, message: "Missing parameters" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Internal server error" });
  }
}

