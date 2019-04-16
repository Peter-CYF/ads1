/*
   Add a recursive call to the triangle function to print a triangle formed
   from the input word.

   Hint: use slice.
 */

function triangle(text)
{
	if (text.length === 0) { return; }
	console.log(text);
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

triangle("Triangular");

/*
   EXPECTED OUTPUT:

   Triangular
   riangular
   iangular
   angular
   ngular
   gular
   ular
   lar
   ar
   r
 */
