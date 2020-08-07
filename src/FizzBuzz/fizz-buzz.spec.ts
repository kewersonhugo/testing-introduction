import fizzBuzz from "./fizz-buzz";

// Fizz Buzz
// A function that takes one number and:
// if the number is divisible by 3, print Fizz
// if the number is divisible by 5, print Buzz
// if the number is divisible by both 3 and 5, print Fizz Buzz
// else, print the number

test("This test always fail", () => {
  const result = fizzBuzz();
  expect(result).toBeTruthy();
});
