/**
 * @typedef {Object} Coordinate
 * @property {Number} row - The row
 * @property {Number} col - The column
 */

/**
 * A Sudoku puzzle.
 *
 * @constructor
 * @param {String} string - The string of Sudoku numbers i.e. the puzzle.
 */
var Puzzle = function(string) {
  // TODO: Create function that generates rows
  // TODO: Create function that generates columns
  // TODO: Create function that generates quadrants
	this._puzzle = string;
};


/* This is the algorithm that returns solutions for empty coordinates
 *
 * @method tryToSolve
 *
 * @param {Coordinate} the location of the cell being operated on
 * @return {Number} A number, doofus.
 * 
 */

Puzzle.prototype.tryToSolve = function(coordinate) {
  // TODO: Implement this.
  // Go through numbers 1-9
  //   Check each number if it's already in the row/col/quad
  // If just one number, that's the solution
  // If more, there's no solution

  // if array.length === 2 then bad news bears
  // if array.length === 1 then return that number in the array
  var arrayOfPossibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return 3;
};

/*
 * TODO
 *
 * @method doesNumberExistInRow
 * @param {coordinate} The coordinate of the row.
 * @param {Number} n - The number to look for
 * @returns {Boolean} TODO.
 * 
 */

Puzzle.prototype.doesNumberExistInRow = function(coordinate, n) {
  // It would be swell if we could get check the row for the existence of the
  // number 'n'
  console.log(this._puzzle);
  console.log('the row is %j', coordinate.row);
  console.log('the number is %j', n);
};


/* This checks to see if there is a number in that space.
 *
 * @method isThereANumberInThatSpace
 *
 * @param {Coordinate} the location of the cell to be checked.
 *
 * @returns {Boolean} the existence of the number is either true or false.
 */
Puzzle.prototype.isThereANumberInThatSpace = function(coordinate) {
  return this._puzzle[coordinate.row * 9 + coordinate.col] !== ' ';
};

module.exports = Puzzle;
