class Round {
  constructor(deck) {
  this.deck = deck;
  this.currentCard = this.deck.cards[0];
  this.turns = 0;
  this.incorrect = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns ++
  }

};

module.exports = Round;