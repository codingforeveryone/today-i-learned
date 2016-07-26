### The Spread Operator

A powerful feature of ES6, the latest standard of JavaScript implementation, is the spread operator, represented by three dots (...).

This operator is commonly used as a prefix for parameter names or elements in an array. In this way, expressions can be expanded in places where multiple arguments (for function calls) or multiple elements (for array literal notation) are expected.

* *Example 1 - Function calls*   
The spread syntax enables you to pull function arguments out of an array by adding a parameter prefixed by `...`. This is quite handy when an array is passed as an argument (or multiple arguments) to a function, as below:
```
function add(a,b,c) {
	return a+b+c;
}
var scores = [10,20,30];
add(...scores); // returns 60
```  

* *Example 2 - Array literal notation*  
When you declare an array using brackets, you may use the spread operator to populate the array with a number of elements as below:
```
var shopping = ["milk","bread","eggs"];
var prepForParty = ["beers","snacks","sodas"];
var toBuy = ["rice",...shopping,...prepForParty,"salad"];
console.log(toBuy); // [ "rice", "milk", "bread", "eggs", "beers", "snacks", "sodas", "salad" ]
```  

The spread operator looks exactly the same as the rest operator, which is used for destructuring arrays and objects. 

It is also worth noting that the ES6 specification is currently in progress in terms of browser support. As such, the spread operator, which is an ES6 feature, may have compatibility issues in some browsers. More information about browser support can be found in the [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/).

#### References
For more information on both the spread and rest operators, check out the following references:
- [Coding for Everyone - ES6 README - Array Methods Overview](http://codingforeveryone.foundersandcoders.org/JavaScript/array-methods-overview.html)
- [MDN reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)  
- [Youtube JavaScript ES6 Tutorial #5](https://www.youtube.com/watch?v=1INe_jCWq1Q) 
- [How three dots changed JavaScript](https://rainsoft.io/how-three-dots-changed-javascript/)


