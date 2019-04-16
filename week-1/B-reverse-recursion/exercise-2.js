/*
   We wrote a cunning merge function to tell our story but something went
   wrong and it came out backward.

   You're clever. You know the right order. Fix it.
 */   

var first = ["I", "very", "I", "on", "walls"];
var second = ["When", "was", "young", "drew", "the"]; 
var merged = [];

/*
   DO NOT EDIT ANYTHING ABOVE THIS LINE
 */

function merge(left, right, output)
{
	if (left.length === 0) { return; }
	output.push(left.pop());
	merge(right, left, output);
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

merge(first, second, merged);
console.log(merged.join(' '));

/*
   EXPECTED OUTPUT:

   When I was very young I drew on the walls

 */
