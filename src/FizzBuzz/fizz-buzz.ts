export default function fizzBuzz(num: number) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Fizz Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
}
