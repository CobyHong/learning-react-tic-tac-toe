import { render, fireEvent } from '@testing-library/react'; //minimal testing render enviroment. emulate user responses.

// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Square from './Square';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe(''); // Line 3
  });

test('should render an "X" Square', () => {
    const square = render(<Square value={'X'} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe('X'); // Line 3
  });

test('should call the specified onClick when square is clicked', () => {
    const onClick = jest.fn(); //dummy function.
    const square = render(<Square value='X' onClick={onClick} />);
    const button = square.getByRole('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});