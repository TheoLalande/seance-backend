import { test, expect, it, describe } from 'vitest'
// import { getAllShows } from '../controllers/shows/getAllShow'
import fetch from 'node-fetch'

describe("GET_ALL_SHOWS_CONTROLLER", async () => {
  test('Get every show'), async () => {
    const url = 'http://localhost:3002/shows/getAllShows'
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, options).then((response: { json: () => any }) => response.json())

    it('Checks that the status code is 200', function () {
      expect(response.statusCode).toStrictEqual(200)
    })
    it('Checks that the first entry contains every field in db', function () {
      expect(response[0]).toHaveProperty('id')
      expect(response[0]).toHaveProperty('movie')
      expect(response[0]).toHaveProperty('ticketLeft')
      expect(response[0]).toHaveProperty('room')
      expect(response[0]).toHaveProperty('date')
      expect(response[0]).toHaveProperty('time')
      expect(response[0]).toHaveProperty('language')
      expect(response[0]).toHaveProperty('duration')
    })
  }
})