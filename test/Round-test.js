const chai = require('chai');
const assert = chai.assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe("Round", function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
  guess = new Turn();
  });

  it("should have a property of deck", function() {
    assert.equal(round.deck, deck)    
  });

  it("should have a currentCard property which should be the first Card in the Deck (the array of Cards) at the start of the Round", function() {
    assert.deepEqual(round.currentCard, round.deck.cards[0]);
  });

  it("should return the current card being played", function() {
    assert.deepEqual(round.returnCurrentCard(), round.currentCard);
  })
   
  });

  describe("takeTurn method within Round Class", function() {
    let card1, card2, card3, deck, round;

  beforeEach(function() {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
  // guess = new Turn();
  });

    it("should update turns count when a guess is made", function() {
      round.takeTurn();
      assert.equal(round.turns, 1);
    });

    it("should create a new instance of Turn when a guess is made", function() {
      round.takeTurn();
      assert.instanceOf(round.currentTurn, Turn);
    });
    
    it("should evaluate guess and store ids of incorrect guesses", function() { 
      round.takeTurn("pug");
      assert.equal(round.incorrect, 1);
    });

    it("should make the next card in the array the current card", function() {
     
      assert.deepEqual(round.currentCard, card1);
      round.takeTurn();
      assert.deepEqual(round.currentCard, card2);
      round.takeTurn();
      assert.deepEqual(round.currentCard, card3);
    });

    it("should return feedback to tell if the guess is incorrect or correct", function() {
    
      assert.equal(round.takeTurn(), "incorrect!");

    })


  });