import Piece from './piece';
import Board from '../board';

class Bishop extends Piece {
  _display: string;

  constructor(protected side: string) {
    super(side);
    this._display = `<i class="fas fa-chess-bishop ${side}"></i>`;
  }

  findLegalMoves(board: Board, x: number, y: number): string[] {
    const possibleMoves: string[] = new Array();

    return possibleMoves;
  }
}

export default Bishop;
