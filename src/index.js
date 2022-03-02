import './styles.scss';
import Kraken from './modules/kraken.js';
import { scoreFormEventListener, refreshButtonEventListener } from './modules/html_functions.js';

const kraken = new Kraken();

document.getElementById('scores-table').innerHTML = `
  <p class="centered-text">Press Refresh to get the Latest Scores.</p>
`;

document.getElementById('score-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await scoreFormEventListener(kraken);
});

document.getElementById('refresh-button').addEventListener('click', async (e) => {
  e.preventDefault();
  await refreshButtonEventListener(kraken);
});