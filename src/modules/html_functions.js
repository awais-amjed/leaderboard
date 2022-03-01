import Score from './score.js';

const scoreFormEventListener = (kraken) => {
  const scoreForm = document.getElementById('score-form');
  const newScore = new Score(scoreForm.elements.name.value, scoreForm.elements.score.value);
  const scoresTable = document.getElementById('scores-table');

  const newScoreElement = document.createElement('li');
  newScoreElement.innerHTML = `
    <p>${newScore.name}: ${newScore.score}</p>
  `;

  if (kraken.scores.length === 0) {
    scoresTable.innerHTML = '';
  }

  scoresTable.appendChild(newScoreElement);
  kraken.addNewScore(newScore);

  scoreForm.reset();
};

// eslint-disable-next-line import/prefer-default-export
export { scoreFormEventListener };