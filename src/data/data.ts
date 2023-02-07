import * as sqlite3 from 'sqlite3'
// import * as bodyParser from "body-parser";


const dbname = 'mspr.db'
const db = new sqlite3.Database(dbname, err => {
  if (err) {
    throw err
  }
  console.log("Connecté à", dbname)
})

export default db