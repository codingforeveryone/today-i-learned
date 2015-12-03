Today I learned a new word: to 'flatten' an array. This means to concatenate arrays within an array. For example, given a multi-dimensional
array like this one:

```
var multiArray = [[10, 20], [10, 20], [10, 20], [10, 20], [10, 20]]
```

We can use the reduce() method to 'flatten' it:

```
var newArray = multiArray.reduce(function(a, b) {return a.concat(b);});

var newArray = [10, 20, 10, 20, 10, 20, 10, 20, 10, 20]
```

The reduce function won't work for more complex nested arrays like this one:
```
var nestedArray = [[[10], [20]], [[10], [20]], [[10], [20]], [[10], [20]], [[10], [20]]]
````
Flattening such an array requires a bit more work. I'll save that TIL for a rainy day.
