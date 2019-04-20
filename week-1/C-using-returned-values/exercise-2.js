/*
   Fix the termination conditions so all the tests pass.
 */

function mergeOrderedLists(first, second)
{
	var start;
/*
   DO NOT EDIT ANYTHING ABOVE THIS LINE
 */
	if      (first.length >= 0)     { return first; }
/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */
	else if (first[0] <= second[0]) { start = first.shift(); }
	else                            { start = second.shift(); }
	return [start].concat(mergeOrderedLists(first, second));
}

var emptyList = [];
var smallList = [1, 2, 3];
var evenList = [2, 4, 6, 8];
var oddList = [1, 3, 5, 7];
var fizzbuzzList = [3, 5, 15];

function performTest(input1, input2, expected)
{
	var output = mergeOrderedLists(input1.slice(), input2.slice());
	var passed = JSON.stringify(output) === JSON.stringify(expected);

	console.log("Output was", output);
	console.log("Expectation was", expected, ": test", passed ? "passed" : "failed");
}

performTest(emptyList, emptyList, []);
performTest(smallList, emptyList, [1, 2, 3]);
performTest(evenList, oddList, [1, 2, 3, 4, 5, 6, 7, 8]);
performTest(smallList, oddList, [1, 1, 2, 3, 3, 5, 7]);
performTest(fizzbuzzList, smallList, [1, 2, 3, 3, 5, 15]);
performTest(evenList, fizzbuzzList, [2, 3, 4, 5, 6, 8, 15]);
