import './styles.scss';
import Kraken from './modules/kraken.js';
import { scoreFormEventListener } from './modules/html_functions.js';

const kraken = new Kraken();

if (kraken.scores.length === 0) {
  document.getElementById('scores-table').innerHTML = `
        <p class="empty-table">No Scores yet.</p>
      `;
}

document.getElementById('score-form').addEventListener('submit', (e) => {
  e.preventDefault();
  scoreFormEventListener(kraken);
});