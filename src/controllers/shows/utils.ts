import { addHours, addMinutes, getTime, subMinutes } from "date-fns";
import db from "../../data/data";

export default async function checkIfShowIsValid(room, date, time, duration) {
  try {
    const startTime = getTime(subMinutes(formatDate(time, date), 20));
    const endTime = getTime(addMinutes(startTime, duration + 40));
    const showSameDateAndRoom: any = await getShowWithSameDateAndRoom(room, date);
    let isShowValid: boolean = true;
    for (const show of showSameDateAndRoom) {
      let { showStartTime, showEndTime } = getShowStartTimeEndTime(show);
      showStartTime = getTime(showStartTime);
      showEndTime = getTime(showEndTime);
      if (startTime <= showEndTime || endTime >= showStartTime) {
        isShowValid = false;
        return isShowValid
      }
    }
    return isShowValid;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function formatDate(time, date) {
  const hour = time.slice(0, 2);
  const minutes = time.slice(3, 5);
  const [y, m, d] = date.split("-");
  let isoDate = new Date(y, m - 1, d, hour, minutes);
  return isoDate;
}

function getShowStartTimeEndTime(show): any {
  const showStartTime = subMinutes(formatDate(show.time, show.date), 20);
  const showEndTime = addMinutes(showStartTime, show.duration + 40);
  return { showStartTime, showEndTime };
}

async function getShowWithSameDateAndRoom(room, date) {
  const sqlQuery = `SELECT * FROM shows WHERE room='${room}' AND date='${date}'`;
  const shows = await new Promise((resolve, reject) => {
    db.all(sqlQuery, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return shows;
}
