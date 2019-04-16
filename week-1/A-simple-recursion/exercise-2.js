/*
   This program was only meant to run up to 100, and it wasn't meant to crash!
   Make it stop when it should.
 */

function unstoppableFizzBuzz(count = 1)
{
	if      (count % 15 === 0) { console.log("FizzBuzz"); }
	else if (count % 5  === 0) { console.log("Buzz"); }
	else if (count % 3  === 0) { console.log("Fizz"); }
	else                       { console.log(count); }
	unstoppableFizzBuzz(count + 1);
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

unstoppableFizzBuzz();

/*
   EXPECTED OUTPUT:

   Numbers! And Fizzes, and Buzzes, and occasionally FizzBuzzes. But none of
   the numbers should be larger than 100.
 */
