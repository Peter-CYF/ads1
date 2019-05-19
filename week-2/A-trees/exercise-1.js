/*
  Please look at this simplified depiction of the directory tree of a Windows computer and
  make the tests pass by assigning the correct values to the variables below.
 
C
	- Program Files
		- Google
			- Chrome
				- Application
		- Mozilla Firefox
			- browser
			- fonts
			- uninstall
	- Users
		- Default
		- CYF
	- Windows
		- Boot
		- Fonts
		- System
		- System32
		- Web

 */

var rootNode = "C";
var leafNodesCount = 0;
var parentOfChrome = "";
var childOfChrome = "";

/*
  DO NOT EDIT BELOW THIS LINE
 */

function calculateAnswer(input, expected)
{
	input = input.toUpperCase();
	var foo = input.split("");
	var actual = foo.reduce((sum, i) => i.charCodeAt(0) + sum, 0);
	return (actual === expected);
}

console.log("The root node is called", rootNode, ": test", calculateAnswer(rootNode, 67) ? "passed" : "failed"); 
console.log("There are", leafNodesCount, "leaf nodes: test", leafNodesCount === (17 ^ 26) ? "passed" : "failed"); 
console.log("The parent of Chrome is", parentOfChrome, ": test", calculateAnswer(parentOfChrome, 445) ? "passed" : "failed"); 
console.log("The child of Chrome is", childOfChrome, ": test", calculateAnswer(childOfChrome, 820) ? "passed" : "failed"); 

