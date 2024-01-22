import { Request, Response } from "express";
import db from "../../data/data";

export async function postUpdateShow(req: Request, res: Response) {
  try {
    const {
      id,
      movie,
      ticketLeft,
      room,
      date,
      time,
      language,
    } = req.body;

    if (id && movie && ticketLeft && room && date && time && language) {
      const sqlQuery = `
        UPDATE shows 
        SET movie='${movie}', ticketLeft=${ticketLeft}, room='${room}', 
        date='${date}', time='${time}', language='${language}'
        WHERE ID=${id};
      `;

      console.log('🚀🚀 ~ sqlQuery:', sqlQuery);

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