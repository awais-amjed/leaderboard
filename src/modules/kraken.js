export default class Kraken {
  scores = [];

  gameID = 'lXsI44Imhn886rk4uGOx';
  // gameID = 'Zl4d7IVkemOTTVg2fUdz';

  addNewScore = (score) => {
    this.scores.push(score);
  }

  clearArray = () => {
    this.scores = this.scores.splice(0, this.scores.length);
  }
}