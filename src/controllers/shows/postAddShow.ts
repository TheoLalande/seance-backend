import { Request, Response } from "express";
import db from "../../data/data";

export async function postShow(req: Request, res: Response) {
  try {
    console.log("IN FUNCTION");

    const {
      movie,
      ticketLeft,
      room,
      date,
      time,
      language,
    } = req.body;
    if (
      movie &&
      ticketLeft &&
      room &&
      date &&
      time &&
      language
    ) {
      db.run(
        "INSERT INTO shows(movie, ticketLeft, room, date, time, language) VALUES(?,?,?,?,?,?)",
        [
          movie,
          ticketLeft,
          room,
          date,
          time,
          language,
        ]
      );
      return res
        .status(200)
        .json({ status: 200, message: "Seance created ! :)" });
    } else res.status(400).json({ status: 400, message: "Missing parameters" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
}
