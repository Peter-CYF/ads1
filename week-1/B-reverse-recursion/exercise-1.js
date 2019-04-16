/*
  Flip the triangle.
 */

function triangle(text)
{
	if (text.length === 0) { return; }
	console.log(text);
	triangle(text.slice(1));
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

triangle("Triangular");

/*
   EXPECTED OUTPUT:

   r
   ar
   lar
   ular
   gular
   ngular
   angular
   iangular
   riangular
   Triangular

 */
