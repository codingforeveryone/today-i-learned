A character or a set of characters can be repeated multiple times in JavaScript using the following trick:

```javascript
Array(n).join(string);
```

What we are doing here is creating a new `Array` with `n` undefined elements, and then joining them using `string`.
Note that because the string is inserted only _between_ the array elements, this leaves us with `n-1` repeats of the string.

Example:

```javascript
var newString = Array(4).join('abc');

console.log(newString);
// 'abcabcabc'
```

Alternatively, in ES6 there is now a `String.prototype.repeat()` method available:

```javascript
str.repeat(count);

console.log('abc'.repeat(3));
// 'abcabcabc'
```
