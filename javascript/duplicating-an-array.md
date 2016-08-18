In JavaScript, it is not possible to duplicate an array by simply defining a new variable and setting its value equal to the array.
This will only result in both the old and the new variable pointing to the same array. Any modifications to the 'new' array will also modify the original array.

``` javascript
var array1 = ['a','b','c'];
var array2 = array1;
array2.push('d');

console.log(array1);   // ['a','b','c','d']
console.log(array2);   // ['a','b','c','d']
```

Instead, a neat way of duplicating an array is using the `concat()` method with no parameter:

``` javascript
var array1 = ['a','b','c'];
var array2 = array1.concat();
array2.push('d');

console.log(array1);   // ['a','b','c']
console.log(array2);   // ['a','b','c','d']
```

Another way is to use the `slice()` method with no begin or end parameter, thus effectively slicing the entire array:

``` javascript
var array2 = array1.slice();
```
