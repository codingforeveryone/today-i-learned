Many languages contain the concept of "list/array comprehension", which allows one to quickly assemble a new array based upon an existing one.

Coming from the Python language where these are used as commonplace, in Javascript it is recommended not to use list comprehension and instead use the "map" function and "arrow" functions.

So instead of list comprehension as follows:

```javascript
var numbers = [1, 2, 3, 4];
var doubled = [for (i of numbers) i * 2];
console.log(doubled); // logs 2,4,6,8
```

One would use the map function as follows:

```javascript
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(i => i * 2);
```

