const Turn = require('../src/Turn');


class Round {
  constructor(deck, userGuess) {
  this.deck = deck;
  this.turns = 0;
  this.currentCard = this.deck.cards[0];
  this.incorrect = [];
  this.currentTurn;
  this.userGuess = userGuess;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
  
    this.currentTurn = new Turn(userGuess, this.currentCard);
    this.currentTurn.evaluateGuess();
    if(!this.currentTurn.evaluateGuess()) {
       this.incorrect.push(this.currentTurn.card.id)
    }
   
    this.turns += 1;
    this.currentCard = this.deck.cards[this.turns];
    
     return this.currentTurn.giveFeedback();
    } 
  };

module.exports = Round;
