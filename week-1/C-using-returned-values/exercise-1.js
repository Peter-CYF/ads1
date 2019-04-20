/*
   We're trying to add up all the numbers from 1 to 5, but 0 doesn't seem
   like it should be the right answer.
 */

function adder(count)
{
	if (count > 0) return 0;
	else           return count + adder(count);
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

console.log(adder(5));

/*
   EXPECTED OUTPUT:

   Definitely not 0.
 */
