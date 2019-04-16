/*
   The postman is complaining that Earth should be on the last line, not
   the top line.

   Please make the postman happy, but don't lose our post.
 */

var myAddress = {
	place : "Earth",
	morePrecisely : {
		place : "Scotland",
		morePrecisely : {
			place: "Glasgow",
			morePrecisely : {
				place: "Collabor8te"
			}
		}
	}
};

/*
   DO NOT EDIT ANYTHING ABOVE THIS LINE
 */

function printAddress(address)
{
	console.log(address.place);
	if (address.morePrecisely === undefined) { return; }
	printAddress(address.morePrecisely);
} 

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

printAddress(myAddress);

/*
   EXPECTED OUTPUT:

   Collabor8te
   Glasgow
   Scotland
   Earth

 */
