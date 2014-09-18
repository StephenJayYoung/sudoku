var chai = require("chai");
var expect = chai.expect;
var Puzzle = require('../index');

describe("isThereANumberInThatSpace()", function() {
	it('verifies that there is a number at that given coordinate', function() {
		var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
		var coordinate = { row: 0, col: 0 };
		expect(puzzle.isThereANumberInThatSpace(coordinate)).to.eql(true);
	});

	it('verifies that there is a number at that given coordinate', function() {
		var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
		var coordinate = { row: 0, col: 3 };
		expect(puzzle.isThereANumberInThatSpace(coordinate)).to.eql(false);
	});

	it('verifies that there is a number at that given coordinate', function() {
		var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
		var coordinate = { row: 3, col: 3 };
		expect(puzzle.isThereANumberInThatSpace(coordinate)).to.eql(true);
	});
});





