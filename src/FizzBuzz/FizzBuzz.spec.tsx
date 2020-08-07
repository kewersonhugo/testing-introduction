import React from "react";
import FizzBuzz from "./FizzBuzz";
import { render, fireEvent } from "@testing-library/react";

test("FizzBuzz component should render without passing props", () => {
  const { getByText } = render(<FizzBuzz />);
  const header = getByText("FizzBuzz Application");
  expect(header).toBeDefined();
});

test("FizzBuzz component should render subheader Fizz when passing a number divisible by 3", () => {
  const { getByText } = render(<FizzBuzz counter={3} />);
  const subheader = getByText("Fizz");
  expect(subheader).toHaveTextContent("Fizz");
});

test("FizzBuzz component should render subheader Buzz when passing a number divisible by 5", () => {
  const { getByText } = render(<FizzBuzz counter={5} />);
  const subheader = getByText("Buzz");
  expect(subheader).toHaveTextContent("Buzz");
});

test("FizzBuzz component should render subheader FizzBuzz when passing a number divisible by 3 and 5", () => {
  const { getByText } = render(<FizzBuzz counter={15} />);
  const subheader = getByText("Fizz Buzz");
  expect(subheader).toHaveTextContent("Fizz Buzz");
});

test("FizzBuzz component increase counter when clicking in Increment button", () => {
  const { getByText } = render(<FizzBuzz />);
  const button = getByText("Increment");
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  const subheader = getByText("Fizz");
  expect(subheader).toHaveTextContent("Fizz");
});

test("FizzBuzz component increase counter when clicking in Increment button", () => {
  const { getByText } = render(<FizzBuzz counter={14} />);
  const button = getByText("Increment");
  fireEvent.click(button);
  const subheader = getByText("Fizz Buzz");
  expect(subheader).toHaveTextContent("Fizz Buzz");
});
