import './styles.scss';
import Kraken from './modules/kraken.js';
import { scoreFormEventListener } from './modules/html_functions.js';

const kraken = new Kraken();

document.getElementById('score-form').addEventListener('submit',(e) => {
  e.preventDefault();
  scoreFormEventListener(kraken);
});