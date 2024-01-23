import { Request, Response } from "express";
import db from "../../data/data";
import { getAllShows } from "./getAllShow";
import checkIfShowIsValid from "./utils";
export async function postAddShow(req: Request, res: Response) {
  let isShowValid = true
  try {
    const {
      movie,
      ticketLeft,
      room,
      date,
      time,
      language,
      duration,
      price
    } = req.body;
    isShowValid = await checkIfShowIsValid(room, date, time, duration)

    if (
      movie &&
      ticketLeft &&
      room &&
      date &&
      time &&
      language &&
      duration &&
      price
    ) {
      if (!isShowValid) {
        return res.status(400).json({ status: 400, message: "La salle n'est pas disponible à ces dates la" });
      }
      db.run(
        "INSERT INTO shows(movie, ticketLeft, room, date, time, language, duration, price) VALUES(?,?,?,?,?,?,?, ?)",
        [
          movie,
          ticketLeft,
          room,
          date,
          time,
          language,
          duration,
          price
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
