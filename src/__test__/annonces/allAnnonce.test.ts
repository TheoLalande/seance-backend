import { test, expect, it, describe } from "vitest";
import { getAllAnnonces } from "../../controllers/annonces/getAllAnnonces";
import { getAnnoncesById } from "../../controllers/annonces/getAnnoncesById";

import { AnnonceType } from "../../types/AnnonceType";
const fetch = require("node-fetch");
let announceToCheckIfSame;
// http://localhost:3005/annonce/allAnnonces

describe("ANNONCE_GET_ALL_ANNONCES_TEST", async () => {
  let addedId: number;
  test("CONTROLLER - Get every announces from the database", async () => {
    it("Checks that no error are thrown ", function () {
      expect(
        async () => (announceToCheckIfSame = await getAllAnnonces({}, {}))
      ).not.toThrowError();
    });
  });
  test("CONTROLLER - Add a single entry to the database table", async () => {
    const url = "http://localhost:3005/annonce/addAnnonce";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerId: 10,
        guardId: 10,
        annonceTitle: "test",
        startDate: "test",
        endDate: "test",
        plantCount: 999,
        location: 999,
        annonceDescription: "test",
        annoncePicture: "test",
      }),
    };
    const response = await fetch(url, options).then(
      (response: { json: () => any }) => response.json()
    );
    it("Checkes that the query statusCode is 200 (succes)", async function () {
      expect(response.statusCode).toStrictEqual(200);
    });
  });
});
