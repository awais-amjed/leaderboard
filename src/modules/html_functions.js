import Score from './score.js';
import KrakenAPI from './api_implementation.js';

const addRecentScore = (kraken, {
  name, score,
}) => {
  const scoresTable = document.getElementById('scores-table');

  const newScoreElement = document.createElement('li');
  newScoreElement.innerHTML = `
    <p>${name}</p><p>${score}</p>
  `;

  if (kraken.scores.length === 0) {
    scoresTable.innerHTML = '';
  }

  scoresTable.appendChild(newScoreElement);
  kraken.addNewScore(new Score(name, score));
};

const scoreFormEventListener = async (kraken) => {
  const scoreForm = document.getElementById('score-form');
  const newScore = new Score(scoreForm.elements.name.value, scoreForm.elements.score.value);

  document.getElementById('submit-button').innerText = 'Sending Score ...';
  const isAddedToAPI = await KrakenAPI.addNewScore(kraken.gameID, {
    user: newScore.name,
    score: newScore.score,
  });

  document.getElementById('submit-button').innerText = 'Submit';

  if (isAddedToAPI === null) {
    // TODO Show Error
    return;
  }

  addRecentScore(kraken, {
    name: newScore.name,
    score: newScore.score,
  });

  scoreForm.reset();
};

const refreshButtonEventListener = async (kraken) => {
  const scoresTable = document.getElementById('scores-table');
  scoresTable.innerHTML = `
    <p class="centered-text"><img src="./assets/images/loading-bar.png" alt="" width="70"></p>
  `;

  const data = await KrakenAPI.getScores(kraken.gameID);
  if (data === null) {
    // TODO Show Error
    return;
  }

  data.sort((a, b) => b.score - a.score);

  kraken.clearArray();
  scoresTable.innerHTML = '';

  data.forEach((score) => {
    addRecentScore(kraken, {
      name: score.user,
      score: score.score,
    });
  });

  if (kraken.scores.length === 0) {
    document.getElementById('scores-table').innerHTML = `
      <p class="centered-text">No Scores yet.</p>
    `;
  }
};

export { scoreFormEventListener, refreshButtonEventListener };