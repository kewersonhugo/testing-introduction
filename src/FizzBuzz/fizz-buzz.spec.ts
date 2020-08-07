import fizzBuzz from "./fizz-buzz";

// Fizz Buzz
// A function that takes one number and:
// if the number is divisible by 3, print Fizz
// if the number is divisible by 5, print Buzz
// if the number is divisible by both 3 and 5, print Fizz Buzz
// else, print the number

test("should return Fizz when passing a number divisible by 3 as input", () => {
  expect(fizzBuzz(3)).toEqual("Fizz");
  expect(fizzBuzz(6)).toEqual("Fizz");
  expect(fizzBuzz(9)).toEqual("Fizz");
  expect(fizzBuzz(15)).toContain("Fizz");
});

test("should return Buzz when passing a number divisible by 5 as input", () => {
  expect(fizzBuzz(5)).toEqual("Buzz");
  expect(fizzBuzz(10)).toEqual("Buzz");
  expect(fizzBuzz(15)).toContain("Buzz");
});

test("should return Fizz Buzz when passing a number divisible by 3 and 5 as input", () => {
  expect(fizzBuzz(15)).toEqual("Fizz Buzz");
  expect(fizzBuzz(30)).toEqual("Fizz Buzz");
  expect(fizzBuzz(300)).toContain("Fizz Buzz");
});

test("should return the given input when passing any number not divisible by 3 or 5 as input", () => {
  expect(fizzBuzz(1)).toEqual(1);
  expect(fizzBuzz(2)).toEqual(2);
  expect(fizzBuzz(4)).toEqual(4);
});
