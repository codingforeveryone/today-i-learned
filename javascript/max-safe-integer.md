JavaScript handles numbers using the 64-bit binary format, known as double-precision floating point format.

This means that only numbers between - (2^53  - 1) and + (2^53 - 1) can be stored and manipulated without loss of accuracy. The upper limit is stored as a constant in JS under `Number.MAX_SAFE_INTEGER`:

```javascript
console.log (Number.MAX_SAFE_INTEGER)
// 9007199254740991

console.log (9007199254740991 - 1 === 9007199254740991 - 2)
// false

console.log (9007199254740991 + 1 === 9007199254740991 + 2)
// true
```

You can check whether a number can be stored accurately by using the method `Number.isSafeInteger()`:

```javascript
console.log (Number.isSafeInteger (9007199254740990))
// true

console.log (Number.isSafeInteger (9007199254740992))
// false
```

Further reference:
- [MDN article on Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
- [MDN article on Number.isSafeInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)