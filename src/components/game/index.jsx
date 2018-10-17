import React from 'react';
import styled from 'styled-components';

import Board from '../board/index';
import CalculateWinner from '../calculateWinner/index';

const GameBoard = styled.div`

`;
const GameInfo = styled.div`
    margin-left: 20px;
`;
const Game = styled.div`
    display: flex;
    flex-direction: row;
`;

export class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          stepNumber: 0,
          xIsNext: true,
        };
    }

        handleClick(i) {
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (CalculateWinner(squares) || squares[i]) {
            return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            });
        }

        jumpTo(step) {
            this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            });
        }

        render() {
            const history = this.state.history;
            const current = history[this.state.stepNumber];
            const winner = CalculateWinner(current.squares);

            const moves = history.map((step, move) => {
                const desc = move ?
                'Go to move #' + move :
                'Go to game start';
                return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
                );
            });
        
            let status;
            if (winner) {
            status = 'Winner: ' + winner;
            } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
            return (
                <Game>
                <GameBoard>
                    <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    />
        
                </GameBoard>
                <GameInfo>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </GameInfo>
                </Game>
            );
    }
}

export default Component;