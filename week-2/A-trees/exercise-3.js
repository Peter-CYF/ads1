/*
   Write a program that prints out the names of all the nodes in the tree.
 */

var tree = {
	name: "Root",
	children: [
		{
			name: "FirstLeaf",
			children: [
				{
					name: "ThirdLeaf"	
				}
			]
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

   "Root", "FirstLeaf", "SecondLeaf", "ThirdLeaf" in any order.
 */
