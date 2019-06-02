-------------------------------------

# Algorithms and Data Structures 1

## Trees and Advanced Recursion

-------------------------------------

## Contents

* Data Structures

  * Some data structures you already know
  * A new data structure - the Tree

* Advanced Recursion

  * Recursing over Tree structures

-------------------------------------

## Data Structures

When we program in JavaScript, it is easy to think about what we are doing in terms of the features of the language and the types the language recognises. One variable might hold an array, another variable might contain an object.

In computer science however we tend to think of the way data is structured at a more abstract level, in terms of what the data structure allows us to do - for instance, an array allows us to keep a list of items, and an object lets us pair keys with values.

### Some data structures you already know

* The List

The simplest way to structure data and still be able to call it a data structure is to have an unordered List of items that we can shrink and grow as needed. JavaScript's array gives you all the tools to list items in this way.

* The Dictionary

When we look a word up in the dictionary, we see its definition. Similarly, a Dictionary data type lets us set or retrieve a value associated with a key we provide.

When we use an object in this way:
```js
myObject[key] = value;
```
we are treating it as a Dictionary. We can set any value we choose and retrieve it later.

### A new data structure - the Tree

* The Tree

A Tree data structure has a single "root node", and "branches" from there to other nodes. A node with no branches attached is called a "leaf node". Nodes may have values attached, or may not.

Here is a diagram of a possible Tree:

![Trees grow down?](tree.png)

You will see the "root node" is at the top. Traditionally in Computer Science trees are drawn growing down from their roots. This may lead you to some ideas as to how often computer scientists go outside.

When you are going up the tree toward the root node, the node directly above the current node is called the "parent node" or sometimes just "parent", and any nodes which are on branches that descend below the current node are called "child nodes" or sometimes just "children".

Here is one way you might build that tree with JavaScript objects:
```js
var tree = {
	name: "Root",
	children: [
		{
			name: "FirstLeaf"
		},
		{
			name: "Middle",
			children: [
				{
					name: "SecondLeaf"
				},
				{
					name: "ThirdLeaf"
				}
			]
		}
	]
};
```

This may look quite confusing at first glance! However, you can see that each of the objects in the JavaScript corresponds to a node in the tree, and the children of each node are marked in the JavaScript by belonging to a property called `children`.

Tree data structures are very common in programming. Files are stored in a directory tree. HTML tags are laid out in a tree structure, with parents and children. More than this, any time we encounter nested objects in JavaScript, we can think of them as a sort of tree. This is also a tree:

```js
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
```

If you think of each property as a node in its own right and use `Object.keys` to get the children of array and object properties, you can use the same techniques you would apply to any other tree.

#### Exercises:
* Make a new branch in the ads1 repo called *week-2*
* Do the exercises in *week-2/A-trees*

## Advanced Recursion

So far all the recursion we have looked at makes a single recursive call within the recursive function. Most problems of this nature can be solved more simply with loops. However, recursion becomes easier to work with than loops when we have problems that we can split into many smaller problems which can be solved in the same way.

### Recursing over Tree structures

As you may have noticed when you were doing the exercises, it is difficult to work with trees using loops. Trees vary in depth, and some branches may be longer than others.

Using recursion to visit every node on a tree is however relatively simple. We begin by visiting the root node. We read any data attached to the root node, do what our function is supposed to with it, then make recursive calls on each of the root node's children. In a way we are splitting each branch of the tree off into a new tree. We do this again and again until we arrive at the leaf nodes.

```js
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

function print(node)
{
	for (let child in node)
	{
		if (typeof node[child] === "object")
		{
			print(node[child]);
		}
		else
		{
			console.log(child + ": " + node[child]);
		}
        }
}
```

This example takes more work to understand than some of the recursion we have been looking at up until now. The termination condition is not stated separately, but happens in this way: if we look at all the children of the node in the for loop, and don't find any which are objects, we will not perform the recursive step and so we will terminate.

We call the recursive step inside the for loop. If we find multiple children which are objects, we will call the recursive step multiple times.

Recursing over tree structures is useful when we're working with filesystems as well as objects. We will need the help of filesystem commands to determine whether the path we are currently looking at is a directory and to read the files that are present in that directory.

```js
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
```

This second example prints the directory names only after all the files after them have been printed out. How could we change it to print the directory names before printing the files in them?

#### Exercises:
* Do the exercises in *week-2/B-recursion*
