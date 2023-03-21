const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe("Turns", function() {
  
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn("array", card2)


  it("should have a method that returns the guess", function() {
    assert.isString(turn1.usersGuess, "array")
  })
  it("should have a method that retuns the Card", function() {
    assert.isObject(turn1.card, card2);
  })
})

// beforeEach might be good here

// returnGuess: method that returns the guess

// returnCard: method that returns the Card

// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card

// giveFeedback: method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.,

// Will write tests for each method and each possible outcome of each method evaluateGuess and giveFeedback. 