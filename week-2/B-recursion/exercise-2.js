/*
   Modify the print function so that it indents by four spaces each time it prints out a deeper
   level of the object.

   You will find
   var spaces = ' '.repeat(indent);
   useful.
 */

var repositoryData = {
        name: "MyRepo",
        owner: {
                name: "Peter",
                lastLoggedOn: "yesterday",
                lastUpdatedRepo: "yesterday"
        },
        files: [
                {
                        name: "index.html",
                        size: "1260"
                },
                {
                        name: "exercise.js",
                        size: "204"
                }
        ]
}

function printIndented(node)
{
	for (let child in node)
	{
		if (typeof node[child] === "object")
		{
			console.log(child);
			print(node[child]);
		}
		else
		{
			console.log(child + ": " + node[child]);
		}
        }
}

printIndented({repositoryData}, 0);

/*
   EXPECTED OUTPUT:

repositoryData
    name: MyRepo
    owner
        name: Peter
        lastLoggedOn: yesterday
        lastUpdatedRepo: yesterday
    files
        0
            name: index.html
            size: 1260
        1
            name: exercise.js
            size: 204
 */
