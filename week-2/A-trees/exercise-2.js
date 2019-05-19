/*
   Write a program that prints out the names of all the nodes in the tree.
 */

var tree = {
	name: "Root",
	children: [
		{
			name: "FirstLeaf"
		},
		{
			name: "SecondLeaf"
		}
	]
};

function printNames(root)
{

}
printNames(tree);

/*
   EXPECTED OUTPUT:

   "Root", "FirstLeaf", "SecondLeaf" in any order.
 */
