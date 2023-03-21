const data = require('./data');
const prototypeQuestions = data.prototypeData;


class Turn {
  constructor (usersGuess, card) {
    this.usersGuess = usersGuess;
    this.card = card;

  }
returnGuess() {
  return this.usersGuess;
}

returnCard() {
  return this.card = card;
}

evaluateGuess

}

module.exports = Turn;