-------------------------------------

# Algorithms and Data Structures 1

## Recursion

-------------------------------------

## Contents

* What do we mean by Algorithms and Data Structures?
* Introduction to Recursion

  * What is recursion and how does it work?
  * Termination conditions
  * A simple example program
  * Recursion in reverse
  * Reasoning recursively
  * Using return values with recursion

-------------------------------------

## What do we mean by Algorithms and Data Structures?

"Algorithm" is a word that is almost exclusively used by mathematicians and people who program computers. It means "a process or set of rules that are followed to carry out a calculation or solve a problem".

In a sense an algorithm is a recipe we can program the computer to follow. You could say all the programs we write on the computer contain algorithms, in a way, but usually we save the word to describe solutions to complex problems.

"Data structure" is a phrase we use when we want to convey how data that belongs together is stored in the computer's memory and used. This sounds very vague, but in practice there are a limited number of common ways that data is structured.

This module will be introducing new techniques for storing data and working with it, with an emphasis on providing practical value for front end developers.

## Introduction to Recursion

#### A Small Note Before We Begin

All the examples you will see in this lesson are things that are generally easier to solve with loops than recursion. This is because they are simple examples designed to help you understand what recursion is and how it works.

Next lesson we will be looking at practical uses of recursion, and problems where a recursive solution is much easier to write than one that uses loops, but you need to understand the basics first!

### What is recursion and how does it work?

If you type "recursion" into Google, it will answer "Did you mean: recursion?"

If you click the link, you will come back to the same page again and again.

This is a computer scientist joke.

'Recursion' is a word that refers to things which are defined in terms of themselves. In programming, it refers to a function that calls itself.

```js
function iCallMyself()
{
	iCallMyself();
}
```

Calling the `iCallMyself()` function from within the function body is called a **recursive call**.

If you try running this function, it will break because it has no way to stop calling itself. The first thing we have to do when we define a recursive function is figure out how we are going to make it stop.

### Termination conditions

We need to introduce a check that stops the function calling itself forever. Normally a recursive function has arguments, and when the arguments satisfy a certain condition, the function returns without calling itself again. This condition is called a **termination condition**.

Modifying our example:
```js
function iCallMyself(howManyTimes)
{
	if (howManyTimes <= 0) { return; }
	iCallMyself(howManyTimes - 1);
}
```

The termination condition here is the parameter being less than or equal to zero. If we call the function with a value larger than zero, it will call itself with values that decrease by one each time until zero is reached, and then it will stop.

### A simple example program

```js
function countDown(count)
{
	// Print a count to the console
	console.log(count.toString());

	// Termination condition
	if (count <= 1) { return; }

	// Recursive call
	countDown(count - 1);
}

countDown(3);
```

Before going any further, see if you can figure out for yourself what happens here.

Taking it one step at a time:

```
countDown(3) is called.
countDown(3) prints 3 to the console.
3 is more than 1, so countDown(2) is called.
countDown(2) prints 2 to the console.
2 is more than 1, so countDown(1) is called.
countDown(1) prints 1 to the console.
1 is equal to 1, so countDown(1) stops and we don't call countDown(0).
```

We print out `3 2 1`.

So far this is quite easy. We could easily do this with a loop!

#### Exercises:
* Clone the repo at `https://github.com/Peter-CYF/ads1`
* Make a branch called *week-1*
* Do the exercises in *week-1/A-simple-recursion*

### Recursion in reverse

What happens if we move the `console.log` to the bottom?

```js
function countDown(count)
{
	// Termination condition
	if (count <= 1) { return; }

	// Recursive call
	countDown(count - 1);

	// Print a count to the console
	console.log(count.toString());
}

countDown(3);
```
Before going any further, see if you can figure out for yourself what happens here.

Run the program. Did you expect the result?

```
countDown(3) is called.
3 is more than 1, so countDown(2) is called.
2 is more than 1, so countDown(1) is called.
1 is equal to 1, so countDown(1) stops and we don't call countDown(0).
countDown(1) prints 1 to the console. It returns.
It was called by countDown(2) so the place we return to is countDown(2) - after the countDown() call.
countDown(2) prints 2 to the console. It returns.
It was called by countDown(3) so the place we return to is countDown(3) - after the countDown() call.
countDown(3) prints 3 to the console.
```

We print out `1 2 3`.

We should probably rename it `countUp` now!

### Reasoning recursively

When a function gets called recursively, each new recursive call takes it closer to its termination condition, the function call that stops the recursion - in this example, `countDown(1)`.

Code in the function that executes before the recursive call will be called with the inputs to each new recursive call. In the first example we call `console.log(3)`, then `console.log(2)`, then `console.log(1)`.

Code in the function that executes after the recursive call will be called with the inputs to each new recursive call in reverse order! In the second example we call `console.log(1)`, then `console.log(2)`, then `console.log(3)`. This is because we have to return from the functions `countDown(1)`, `countDown(2)` and `countDown(3)` in order to get to that code.

Often we want to return the results of work that a function has done. If that function is recursive, all the code we write that works with those results has to come after the recursive call. This means that we need to get used to working with the reverse direction.

#### Exercises:
* Do the exercises in *week-1/B-reverse-recursion*

### Using return values with recursion

We often run into problems where the solution can be expressed in terms of the solution to an easier problem. Recursion is very useful in this context.

Here's a simple example:

```js
function findCharacter(character, text)
{
	// Two termination conditions!
	if (text.length === 0)
	{
		return false;
	}
	if (text[0] === character)
	{
		return true;
	}

	return findCharacter(character, text.slice(1));
}

findCharacter('d', 'hello world');
```

How does this work?

If we have five characters to examine, and the first character isn't the one we want, we return the result for the remaining four characters. If the first of the four characters isn't the character we want, we return the result for three characters, and so on down until we have no characters left and it's obvious we haven't found it.

At each stage we either have the answer, or we're solving a smaller and easier problem than the one we started with. The easiest problem of all is answering whether the thing we're looking for is in an empty string - clearly it isn't.

In the next lesson we'll start looking at how we can use this technique to divide problems up in much more powerful ways.

#### Note

This would not be a good solution in practice! Slice makes a copy of the text, so we're making a copy of the remaining text every time we look at a new letter. This is very inefficient. However, the inefficiency here is caused by the way slice works, not the recursion.

#### Exercises:
* Do the exercises in *week-1/C-using-returned-values*
