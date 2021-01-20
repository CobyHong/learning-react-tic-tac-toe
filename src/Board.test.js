import { render, fireEvent } from '@testing-library/react'; //minimal testing render enviroment. emulate user responses.
import Board from './Board';

test('should show board getting re-rendered with alternating clicks', () => {
    //create board.
    const board = render(<Board/>);
    //get all buttons from board.
    const buttons = board.queryAllByRole('button');

    //emulate user clicks.
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);

    //check alternating.
    expect(buttons[0].innerHTML).toEqual('X');
    expect(buttons[1].innerHTML).toEqual('O');
    expect(buttons[2].innerHTML).toEqual('X');
});

test('should show status getting re-rendered with appropriate next user', () => {
    //create board.
    const board = render(<Board/>);
    //get all buttons from board.
    const buttons = board.queryAllByRole('button');
    //acquire div.
    const next_user = board.getByText('Next player: X');

    fireEvent.click(buttons[0]);
    expect(next_user.textContent).toEqual('Next player: O');

    fireEvent.click(buttons[1]);
    expect(next_user.textContent).toEqual('Next player: X');

    fireEvent.click(buttons[2]);
    expect(next_user.textContent).toEqual('Next player: O');
});