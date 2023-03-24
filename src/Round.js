const Turn = require('../src/Turn');


class Round {
  constructor(deck, userGuess) {
  this.deck = deck;
  this.turns = 0;
  this.currentCard = this.deck.cards[this.turns];
  this.incorrect = [];
  this.currentTurn;
  this.userGuess = userGuess;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    console.log(this.currentCard)
    this.turns += 1;
    this.currentTurn = new Turn(userGuess, this.currentCard);
    this.currentTurn.evaluateGuess();
    if(!this.currentTurn.evaluateGuess()) {
       this.incorrect.push(this.currentTurn.card.id)
    }
   
     console.log(this.currentTurn.giveFeedback());
     console.log(this.currentCard)
     
     return this.currentTurn.giveFeedback();
    } 
  };

module.exports = Round;
