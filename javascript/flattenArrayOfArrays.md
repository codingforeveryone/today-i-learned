
```javascript
  var arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
  
  arr = arr.reduce( function(a,b){ return a.concat(b) } ); // or
  arr = arr.reduce( (a,b) => a.concat(b) );                // arrow notation equivalent
    
  return arr //returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Check out Mozilla Developer Network (MDN) for documentation on the functions used:
- [reduce function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [concat function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
