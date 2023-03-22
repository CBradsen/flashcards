const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe("Turns", function() {
  let turn1 = null;
  let turn2 = null;
  let card2 = {};
    beforeEach(function() {
     card2 = new Card(2, "What iterator would be good to use if you wanted to create a new array with modified elements?", ["forEach", "map", "find"], "map");
     turn1 = new Turn("map", card2);
     turn2 = new Turn("find", card2);
  });
   
  it("should have a method that returns the guess", function() {
    assert.equal(turn1.returnGuess(), "map")
  })

  it("should have a method that retuns the Card", function() {
    assert.deepEqual(turn1.returnCard(), card2);
  })

  it("should have a method that returns true if correct answer", function() {
    let guess = turn1.evaluateGuess();
    assert.isTrue(guess, true);
  })

   it("should have a method that returns false if incorrect answer", function() {
    let guessWrong = turn2.evaluateGuess();
    assert.isFalse(guessWrong, false);
  })

  it("should return 'correct! if correct answer", function() {
    let feedbackYes = turn1.giveFeedback(turn1.evaluateGuess());
    assert.equal(feedbackYes, "correct!")
  })

  it("should return 'incorrect! if wrong answer", function() {
    let feedbackNo = turn2.giveFeedback(turn2.evaluateGuess());
    assert.equal(feedbackNo, "incorrect!")
  })
})

