/*
   Complete the file finder so it can tell you whether or not the files being searched for
   exist under the current directory.
 */

var fs = require('fs');

function isDirectory(file)
{
	var stat = fs.statSync(file);
	return stat && stat.isDirectory();
}

function fileFinder(startingPath, fileName)
{
	var files = fs.readdirSync(startingPath);

	for (let file of files)
	{
		var filePath = startingPath + '/' + file; 
		if (isDirectory(filePath))
                {
			// Insert code here
                }
                else
                {
			// Insert code here
                }
	}
	// Insert code here
}

console.log(fileFinder(".", "exercise-1.js"));
console.log(fileFinder(".", "giraffe"));
console.log(fileFinder(".", "test-data"));

/*
   EXPECTED OUTPUT:

   true
   false
   true
 */
