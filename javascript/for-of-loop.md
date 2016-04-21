The `for-of` loop is a clever new way of iterating over iterable objects in JavaScript ES6, including Array, Map, Set and String.
It is significantly more concise than the traditional `for` loop, and more versatile than the `forEach` method.
The following syntax is used:

```javascript
for (variable of iterable) {
  statement
}
```

Example:

```javascript
let fruitArray = ['orange', 'apple', 'banana'];;

for (let fruit of fruitArray) {
  console.log(fruit);
}

// 'orange'
// 'apple'
// 'banana'
```

Importantly, the `for-of` loop is not the same as the `for-in` loop.
The `for-in` loop works on any object, and loops over the names of the object's properties.
In contrast, the `for-of` loop works only on iterable objects (i.e. collections), and is for looping over data.

For further reference see:
- [MDN entry for for-of loop] (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)
- [Mozilla Hacks article on for-of loops] (https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/)
