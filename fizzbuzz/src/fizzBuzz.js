var Fizzbuzz = function(){};

Fizzbuzz.prototype.play = function(choice) {
  if (this.isDivisibleBy(15, choice)){
    return "Fizz Buzz";
  }
  if (this.isDivisibleBy(5, choice)){
    return "Buzz";
  }
  if (this.isDivisibleBy(3, choice)){
    return "Fizz";
  }
  return choice;
};

Fizzbuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0
};
