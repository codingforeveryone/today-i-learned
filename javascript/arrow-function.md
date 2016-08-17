# The Arrow Function

Working in some Katas in Codewars I found some solutions that were written just in one line. Studying how that was done, I found the arrow functions.

They have a few important properties that you could read in the [resource links](#resources), but what I want to tell here is the ability of returning the result of an expression without the `return` keyword and in the same line. This can make the code more readable. Look at the example below:

```JavaScript
var myFunction = function(arg) {
  return (expression);
}

// it is equivalent to
var myFunction = arg => (expression);
```
Note that the argument in the example above is not placed inside parenthesis. When the arrow function receives just one argument, the use of parenthesis is optional. However, as you will see in the following examples, in case of more than one argument they must be placed inside parenthesis.

In terms of how a value is returned from an arrow function there are two types of structures: one expression inside the function, or more than one.

```JavaScript
// One expression. You have two possibilities.
  // 1. Without braces. The value resulting from the expression is returned. The braces must be omitted
var sum = (a, b) => a + b;
  // 2. With braces. The value resulting from the expression must be explicitly returned
var sum = (a, b) => {return a + b};

// More than one expression. The braces must be written and the returned value must be explicitly returned
var function = (a, b, c) => {
  c = a + b;
  if (c > a) {
    return a;
  } else {
    var result = // some complex calculations here
    return result;
  }
}
```

One practical example is when you want to sort an array of numbers. With this technique you can simply do the following:
```JavaScript
var arr = [6, 3, 4, 9, 1, 23, 15, 5];

arr.sort((a, b) => a - b); // [1, 3, 4, 5, 6, 9, 15, 23]
```

## Resources
  1. [Arrow functions on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
