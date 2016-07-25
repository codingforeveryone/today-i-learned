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

In this respect, reduce() is very much like forEach() except it has an additional first argument (the memo).  When you are going to use either method, it may be worth considering whether the other method may be more useful in the context.

### Example comparing reduce() and forEach()

In this example, every third item in ```arr``` is a pupil sitting on the back row according to a teacher's seating plan.  The teacher wants a list of anybody in the back row who underperformed in the most recent exam (the scores from the most recent exam are also provided in arr).  This could be achieved with either reduce() or forEach():


```javascript
var arr = [	        ["Billy", 100], 
			["Charlie", 70], 
			["Devica", 90], 
			["Edward", 50], 
			["Francesca", 90],
			["Gareth", 80],
			["Harry", 55],
			["India", 75],
			["James", 30]        ];

// create list using reduce()
var listToMoveWithReduce = arr.reduce(function(a, b, index, arr){ 
	return (index+1) %  3 === 0 && b[1] <= 60 ? a.concat(b[0]): a;
}, []);

// create list using forEach()
var listToMoveWithForEach = [];
arr.forEach(function(b, index, arr){
	if ((index+1) % 3 === 0 && b[1] <= 60) {
		listToMoveWithForEach.push(b[0]);
	}
}); 

```

Some things worth noting from this example:

- The reduce() method can be called while declaring the listToMoveWithReduce array.  If we were to try the same with forEach(), the listToMoveWithForEach would be set to undefined.  This is because the reduce() method returns a value by default (the return value in the last loop it runs) whereas the forEach() method will return undefined by default.
- The forEach() function uses push() to add to the listToMoveWithForEach array whereas the reduce() function uses .concat() for the same functionality.  This is because the reduce() method works by catching return values whereas the forEach() method just executes the code within the loop.
- The reduce() method was called with a second argument after the callback function (set to an empty array).  If this had not been set, the reduce() method would have started running on arr[1] and not arr[0].  This would have resulted in Billy being included in listToMoveWithReduce despite him currently sitting on the front row and his excellent test score.  The forEach() method will run on every index of the array by default.

### Links

The following links to the MDN documentation on reduce() and forEach() are helpful:

- [reduce()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)