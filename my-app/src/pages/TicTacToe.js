import {useState, useEffect} from 'react';
import { Tile } from '../components';

const TicTacToe = () => {
  const [boardState, setBoardState] = useState(new Array(9).fill(0));
  const [playerTurn, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(0);

  const makeMove = (pos) => {
    if(boardState[pos] === 0 && winner === 0) {
      const newBoard = [...boardState];
      newBoard[pos] = playerTurn;
      setPlayerTurn(playerTurn === 1 ? 2 : 1);
      setBoardState(newBoard);
    }
  }
  
  const reset = () => {
    setBoardState(new Array(9).fill(0));
    setPlayerTurn(1);
    setWinner(0);
  }

  const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]              
    ];

    for (const [a, b, c] of winningCombinations) {
        if (boardState[a] !== 0 && 
            boardState[a] === boardState[b] && 
            boardState[a] === boardState[c]) {
            setWinner(boardState[a]);
            return;
        }
    }
};

  useEffect(() => {
    checkWinner();
}, [boardState]);

  return (
    <div>
      <p>Develop a child-friendly version of the classic game Tic Tac Toe. 
        The game comprises a 3x3 grid where each cell represents an active position. 
        Two players alternate turns, selecting an unoccupied cell during their 
        respective turns. Upon selecting a cell, the first player marks it with 
        an "X", followed by the second player marking with an "O". The objective 
        is for a player to form a sequence of three consecutive marks in a row, 
        column, or diagonal to win the game. In the event that all cells are occupied 
        without a winning sequence, the game concludes in a draw.
      </p>

      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>Tic Tac Toe Game</h1>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "300px" }}>
              {boardState.map((value, i) => (
                <Tile key={i} number={value} press={() => { makeMove(i) }} />
              ))}
            </div>
          </div>
          <button style={{ marginTop: "30px" }} onClick={reset}>Reset</button>
          {winner !== 0 && <h1>The winner is {winner === 1 ? "Player One (X)" : "Player Two (O)"}</h1>}
        </div>
      </div>
    </div>
  );
  };
  
  export default TicTacToe;