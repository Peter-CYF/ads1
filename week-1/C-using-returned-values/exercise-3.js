/*
  Write a recursive function that calculates the factorial of a number.
  The factorial of a number N is defined as 1 x 2 x ... x N.
  The factorial of 1 is 1.
  The factorial of 0 is 1.
  Return undefined if the input is a negative number.
 */

function factorial(number)
{
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

function performTest(input, expected)
{
	var output = factorial(input);
	var passed = (output === expected);

	console.log("Output was", output);
	console.log("Expectation was", expected, ": test", passed ? "passed" : "failed");
}

performTest(1, 1);
performTest(2, 2);
performTest(4, 24);
performTest(0, 1);
performTest(-1, undefined);
