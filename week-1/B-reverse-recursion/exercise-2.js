/*
    We're trying to print out a b c, but we're printing out c b a.
    Can you fix it? I tried earlier, but I couldn't get a to work.

    Hint: you don't need a return statement, and maybe you should
    check if the character isn't 'a'.
 */

function abc(value)
{
	let character = String.fromCharCode(value);
	console.log(character);
	if (character === 'a') { return; }
	abc(value - 1);
}

/*
   DO NOT EDIT ANYTHING BELOW THIS LINE
 */

abc("c".charCodeAt(0));

/*
   EXPECTED OUTPUT:

   a
   b
   c
 */
