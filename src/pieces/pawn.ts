import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Pawn extends Piece {
  _display: string;

  constructor(side: string) {
    super(side);
    this._display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves(board: Board, actualField: Field): string[] {
    const possibleMoves: Array<string> = new Array();
    const x = actualField.x;
    const y = actualField.y;
    if (this.side == 'white') {
      //Two forward white
      if (x === 6 && board.fields[x - 2][y].isEmpty() && board.fields[x - 1][y].isEmpty()) {
        possibleMoves.push(`${x - 2},${y}`);
      }
      //One forward white
      if (x - 1 >= 0 && board.fields[x - 1][y].isEmpty()) {
        possibleMoves.push(`${x - 1},${y}`);
      }
      //Attacks white
      if (board.fields[x - 1][y - 1] !== undefined 
        && !board.fields[x - 1][y - 1].isEmpty()
         && board.fields[x - 1][y - 1].piece?.side === 'black') {
          possibleMoves.push(`${x - 1},${y - 1}`);
      }
      if (board.fields[x - 1][y + 1] !== undefined
         && !board.fields[x - 1][y + 1].isEmpty()
          && board.fields[x - 1][y + 1].piece?.side === 'black') {
          possibleMoves.push(`${x - 1},${y + 1}`);
      }
    } else {
      // Two forward black
      if (x === 1 && board.fields[x + 2][y].isEmpty() && board.fields[x + 1][y].isEmpty()) {
        possibleMoves.push(`${x + 2},${y}`);
      }
      // One forward black
      if (x + 1 <= 7 && board.fields[x + 1][y].isEmpty()) {
          possibleMoves.push(`${x + 1},${y}`);
      }
      //Attacks black
      if (board.fields[x + 1][y - 1] !== undefined
        && !board.fields[x + 1][y - 1].isEmpty()
         && board.fields[x + 1][y - 1].piece?.side === 'white') {
         possibleMoves.push(`${x + 1},${y - 1}`);
     }
     if (board.fields[x + 1][y + 1] !== undefined
        && !board.fields[x + 1][y + 1].isEmpty()
         && board.fields[x + 1][y + 1].piece?.side === 'white') {
         possibleMoves.push(`${x + 1},${y + 1}`);
     }
    }
    return possibleMoves;
  }

  findAttackingMoves(board: Board, actualField: Field): string[] {
    const attackingMoves: Array<string> = new Array();
    const x = actualField.x;
    const y = actualField.y;

    if (this.side = 'white') {
      if (board.fields[x - 1][y - 1] !== undefined 
        && !board.fields[x - 1][y - 1].isEmpty()
         && board.fields[x - 1][y - 1].piece?.side === 'black') {
          attackingMoves.push(`${x - 1},${y - 1}`);
      }
      if (board.fields[x - 1][y + 1] !== undefined
         && !board.fields[x - 1][y + 1].isEmpty()
          && board.fields[x - 1][y + 1].piece?.side === 'black') {
          attackingMoves.push(`${x - 1},${y + 1}`);
      }
    } else {
      if (board.fields[x + 1][y - 1] !== undefined
         && !board.fields[x + 1][y - 1].isEmpty()
          && board.fields[x + 1][y - 1].piece?.side === 'white') {
          attackingMoves.push(`${x + 1},${y - 1}`);
      }
      if (board.fields[x + 1][y + 1] !== undefined
         && !board.fields[x + 1][y + 1].isEmpty()
          && board.fields[x + 1][y + 1].piece?.side === 'white') {
          attackingMoves.push(`${x + 1},${y + 1}`);
      }
    }
    return attackingMoves;
  }

  // promote() { }
  // enPassant() { }
}

export default Pawn;