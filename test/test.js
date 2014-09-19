var chai = require("chai");
var expect = chai.expect;
var Puzzle = require('../index');

var puzzleString = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';

describe('row/col/quad generator functions', function() {
	it('generates 9 rows', function() {
		// TODO: Write a test for the generateRows function
		var puzzle = new Puzzle(puzzleString);
		var row0 = ['1', '5', '8', ' ', '2', ' ', ' ', '6', ' '];
		var row1 = ['2', ' ', ' ', ' ', '8', ' ', ' ', '9', ' '];
		var row2 = [' ', '3', ' ', ' ', '7', ' ', '8', ' ', '2'];
		var row3 = [' ', '6', ' ', '7', '4', ' ', ' ', ' ', ' '];
		var row4 = [' ', ' ', '4', ' ', '6', ' ', '7', ' ', ' '];
		var row5 = [' ', ' ', ' ', ' ', '1', '9', ' ', '5', ' '];
		var row6 = ['4', ' ', '9', ' ', '3', ' ', ' ', '2', ' '];
		var row7 = [' ', '2', ' ', ' ', '5', ' ', ' ', ' ', '8'];
		var row8 = [' ', '7', ' ', ' ', '9', ' ', '4', '1', '3'];
		var rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8];
		expect(puzzle.generateRows()).to.eql(rows);
	});

	it.skip('generates 9 columns', function() {
		// TODO: Write a test for the columnGenerator function
	});

	it.skip('generates 9 quadrants', function() {
		// TODO: Write a test for the quadrantGenerator function
	});
});

describe("isThereANumberInThatSpace()", function() {
	it('verifies that there is a number at the given coordinate', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 0, col: 0 };
		expect(puzzle.isThereANumberInThatSpace(coordinate)).to.eql(true);
	});

	it('verifies that there is not a number at the given coordinate', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 0, col: 3 };
		expect(puzzle.isThereANumberInThatSpace(coordinate)).to.eql(false);
	});

	it('verifies that there is a number at a more complicated coordinate', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 5, col: 4 };
		expect(puzzle.isThereANumberInThatSpace(coordinate)).to.eql(true);
	});
});

// describe('row checker', function() {
// 	it('checks to see if numbers 1-9 exist in the given row', function() {
// 		var puzzle = new Puzzle(puzzleString);
// 		var coordinate = { row: 1, col: 1 };
// 		var row1 = ['2', ' ', ' ', ' ', '8', ' ', ' ', '9', ' '];
// 		expect(puzzle.checkRow(coordinate, numberToCheck)).to.eql(row1Missing);
// 	});
// });

describe('row checker', function() {
	it.skip('checks that row 1 does not have a 5', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 1, col: 1 };
		expect(puzzle.doesNumberExistInRow(coordinate, 5)).to.eql(false);
	});

	it.skip('checks that row 0 does have a 6', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 0, col: 1 };
		expect(puzzle.doesNumberExistInRow(coordinate, 6)).to.eql(true);
	});
});

describe('Some tests to do in the future', function() {
	// TODO: Un-skip this after implemeting `tryToSolve`.
	it('solves solvable cells', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 0, col: 6 };
		expect(puzzle.tryToSolve(coordinate)).to.eql(3);
	});

	// TODO: Come back to this test after making other rad things.
	it.skip('does not solve unsolvable cells', function() {
		var puzzle = new Puzzle(puzzleString);
		var coordinate = { row: 0, col: 3 };
		expect(puzzle.tryToSolve(coordinate)).to.eql(null);
	});
});