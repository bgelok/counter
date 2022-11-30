// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  // Render the Counter component here
  <Counter/>
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countNum = screen.getByTestId('count'); //displayed value

  let countValue = parseInt(screen.getByTestId('count').innerHTML);
  const newCount = (countValue + 1).toString(); //increment the count

  userEvent.click(screen.getByText('+')); //click increment
  expect(countNum.textContent).toBe(newCount); //check value
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countNum = screen.getByTestId('count'); //displayed value

  let countValue = parseInt(screen.getByTestId('count').innerHTML);
  const newCount = (countValue - 1).toString(); //increment the count

  userEvent.click(screen.getByText('-')); //click increment
  expect(countNum.textContent).toBe(newCount); //check value
});
