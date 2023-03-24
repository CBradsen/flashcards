const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Deck {
  constructor(cards) {
    this.cards = cards;
    
    
  }
  countCards() {
    let cardNumber = this.cards.length;
    return cardNumber; 
  }
};


module.exports = Deck;