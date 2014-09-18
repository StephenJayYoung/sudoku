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

};

/* This checks to see if there is a number in that space.
 *
 * @method isThereANumberInThatSpace
 *
 * @param {Coordinate} the location of the cell to be checked.
 *
 * @returns {boolean} the existence of the number is either true or false.
 */
Puzzle.prototype.isThereANumberInThatSpace = function(coordinate) {
	
};

module.exports = Puzzle;
