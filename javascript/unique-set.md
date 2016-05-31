###Remove duplicate items from an array using javascript

There are quite a few ways to trim down an array to a unique set of elements in javascript, but most of them aren't very concise or elegant. 

Today I learned about the Set object and how it can be used to remove duplicate elements.

~~~~
function uniqueItems(array) {
   return Array.from(new Set(array));
}
~~~~

It's worth noting that Sets preserve the order of the original array.

If you want to read more about Sets, [here's](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set) a link to the MDN page.