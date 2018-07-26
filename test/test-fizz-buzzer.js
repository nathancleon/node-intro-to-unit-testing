// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should return "fizz-buzz" if divisible by 15', function() {
      const normalCases = [15, 30, 45];
      normalCases.forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal("fizz-buzz");
      });
    });

    it('should return "buzz" if divisible by 5', function() {
        const normalCases = [5, 10, 20];
        normalCases.forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal("buzz");
        });
      });
  
    it('should return "fizz" if divisible by 3', function() {
        const normalCases = [3, 6, 12];
        normalCases.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal("fizz");
        });
    });
  
    it('should raise error if args not numbers', function() {
      // range of bad inputs where not both are numbers
      const badInputs = ["a", "!", false];
      // prove that an error is raised for bad inputs
      badInputs.forEach(function(input) {
        expect(function() {
          fizzBuzzer(input);
        }).to.throw(Error);
      });
    });
  });