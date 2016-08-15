In JavaScript it is not possible to duplicate an array simply by defining a new variable and setting its value equal to the array.
This will only result in both the old and the new variable pointing to the same array. Any modifications to the 'new' array will also modify the original array.
``` javascript
var array1 = ['a','b','c'];
var array2 = array1;
array2.push('d');

console.log(array1)   // ['a','b','c','d']
```

Instead, a neat way of copying an array is:

``` javascript
var array1 = ['a','b','c'];
var array2 = array1.concat();

console.log(array2)   // ['a','b','c']
```
