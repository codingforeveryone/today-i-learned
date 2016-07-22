### Other TILs on Reduce() Method

Others have already written a couple of helpful TILs on the reduce method, check them out here:

- [flatten arrays](https://github.com/codingforeveryone/today-i-learned/blob/master/javascript/flatten-arrays.md)

- [flatten array of arrays](https://github.com/codingforeveryone/today-i-learned/blob/master/javascript/flattenArrayOfArrays.md)

### Other Interesting things to do

While reduce() is incredibly useful if you just want to flatten arrays (or arrays of arrays), it also has some interesting additional functionality.

The first thing to note is that you can write additional logic into the callback method and use it as an accumulator.  So, if we wanted to find the longest word in an array we could use the following code:

```javascript
var arr = ["apples", "bananas", "pears", "grapes"];

var longest = arr.reduce(function(a,b){ return b.length > a.length ? b : a});
```

For each item of the array, the reduce method will check what was previously returned by it and compare it against the current array item.  If the current array item is bigger it will return that item to the next loop.  If not, it will return the original item to the next loop.

### Using reduce() instead of forEach()

The examples we have seen so far in this and the other TILs have only used the first two arguments in the callback function of the reduce() method.  However, this function can also receive the index of the current array object (this would be the third argument) and the array being traversed (this would be the fourth argument).

In this respect, reduce() is very much like forEach() except it has an additional first argument (the memo).  When you are going to use either method, it may worth considering whether the other method may be more useful in the context.

### Links

The following links to the MDN documentation on reduce() and forEach() are helpful:

- [reduce()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)