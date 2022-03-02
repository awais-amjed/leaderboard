export default class KrakenAPI {
  static baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

  static getScores = async (gameID) => fetch(`${this.baseURL}/games/${gameID}/scores/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => {
    if (response.status === 200) {
      const data = await response.json();
      return data.result;
    }
    return null;
  });

  static addNewScore = async (gameID, {
    user, score,
  }) => fetch(`${this.baseURL}/games/${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    if (response.status === 201) {
      return true;
    }
    return null;
  });
}