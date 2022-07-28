export default class Kraken {
  scores = [];

  gameID = 'rXsiRnCQjdB5JNjPRRQN';

  addNewScore = (score) => {
    this.scores.push(score);
  }

  clearArray = () => {
    this.scores = this.scores.splice(0, this.scores.length);
  }
}