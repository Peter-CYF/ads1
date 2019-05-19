var fs = require('fs');

function isDirectory(file)
{
	var stat = fs.statSync(file);
	return stat && stat.isDirectory();
}

function printPath(path)
{
	var files = fs.readdirSync(path);

	for (let file of files)
	{
		file = path + '/' + file; 
		if (isDirectory(file))
                {
                        printPath(file);
                }
                else
                {
                        console.log(file);
                }
	}
	console.log(path);
}

printPath(".");
