describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleBy(3, 12)).toBe(true);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleBy(3, 13)).toBe(false);
    });
  });

  describe('returns the string', function() {
    it('Fizz when divisible by three', function() {
      expect(fizzbuzz.play(3, 3)).toBe("Fizz")
    });
  });

  describe('returns the string', function() {
    it('Fizz when divisible by three', function() {
      expect(fizzbuzz.play(3)).toBe("Fizz")
    });
  });

  describe('returns the string', function() {
    it('Buzz when divisible by five', function() {
      expect(fizzbuzz.play(5)).toBe("Buzz")
    });
  });

  describe('returns the string', function() {
    it('Fizz Buzz when divisible by fifteen', function() {
      expect(fizzbuzz.play(15)).toBe("Fizz Buzz")
    });
  });

  describe('returns the integer', function() {
    it('when not divisible by three or 15', function() {
      expect(fizzbuzz.play(4)).toBe(4)
    });
  });
  // describe('knows when a  number is', function(){
  //   it('NOT divisible by 3', function() {
  //     expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  //   });
  // });
  //
  // describe('returns fizz when', function(){
  //   it('divisible by three', function() {
  //     expect(fizzbuzz.play(3)).toEqual("Fizz")
  //   });
  // });
  //
  // describe('knows when a  number is', function(){
  //   it('divisible by 5', function() {
  //     expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  //   });
  // });
  //
  // describe('knows when a  number is', function(){
  //   it('NOT divisible by 5', function() {
  //     expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
  //   });
  // });
  //
  // describe('returns fizz when', function(){
  //   it('divisible by three', function() {
  //     expect(fizzbuzz.play(5)).toEqual("Buzz")
  //   });
  // });
  //
  // describe('knows when a  number is', function(){
  //   it('divisible by 3 and 5', function() {
  //     expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  //   });
  // });
  //
  // describe('knows when a  number is', function(){
  //   it('divisible by 3 and 5', function() {
  //     expect(fizzbuzz.isDivisibleByFifteen(12)).toBe(false);
  //   });
  // });
  //
  // describe('returns fizz when', function(){
  //   it('divisible by three', function() {
  //     expect(fizzbuzz.play(15)).toEqual("Fizz Buzz")
  //   });
  // });
});
