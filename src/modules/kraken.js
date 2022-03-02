export default class Kraken {
  scores = [];

  gameID = 'lXsI44Imhn886rk4uGOx';

  addNewScore = (score) => {
    this.scores.push(score);
  }

  clearArray = () => {
    this.scores = this.scores.splice(0, this.scores.length);
  }
}