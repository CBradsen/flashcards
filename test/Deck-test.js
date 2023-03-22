const chai = require('chai');
const assert = chai.assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe("Deck", function() {
  
  let card3, card4, card5;
  let cardDeck;
  let deck1;
  let deck2;
  beforeEach(function() {
   card3 =  {id: 3, question: "What type of prototype method directly modifies the existing array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "mutator method"};
   card4 = {id: 4, question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?", answers: ["mutator method", "accessor method", "iteration method"], correctAnswer: "accessor method"};
   card5 = {id: 5, question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", answer: ["mutator method", "accessor method", "iteration method"],
  correctAnswer: "iteration method"};
  cardDeck = [card3, card4, card5];
  deck1 = new Deck(cardDeck);
});
  
  it("should be initialized with an array of Card objects", function() {
    assert.deepEqual(deck1.cards, cardDeck)
  });

  it("should know how many Cards are in the Deck", function() {
    assert.equal(deck1.countCards(), 3);
    assert.notEqual(deck1.countCards(), 0);

    let deck2 = new Deck([]);
    assert.equal(deck2.countCards(), 0)

  })
});
