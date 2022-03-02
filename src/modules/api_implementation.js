const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const getScores = async (gameID) => fetch(`${baseURL}/games/${gameID}/scores/`, {
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

export { getScores };