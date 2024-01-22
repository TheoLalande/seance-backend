import app from "./config/app";
const server: number = 3002
app.listen(server, "10.34.4.159", () => {
  console.log(`Le serveur est lancé sur http://10.34.4.159:${server} le wifi local`);
});
