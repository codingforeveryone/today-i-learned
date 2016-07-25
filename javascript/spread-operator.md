### The spread operator

Today I learned about a powerful feature of ES6 (ES6 being the latest standard of JavaScript implementation in the browsers), the so-called spread operator that looks like this `...`.

This operator is used as a prefix for a parameter name or an element in an array. It allows for an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literal notation) are expected.

* *Example 1 - Function calls*   
The spread syntax enables you to pull a real array out of the function arguments by adding a parameter prefixed by `...`. This is quite handy when an array is passed as an argument (or multiple arguments) to a function, as below:
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

For more information on both the spread and rest operators, check out this [MDN reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator).

