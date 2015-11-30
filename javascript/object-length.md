While creating the comparing-objects TIL, I realised that there is no direct way to find the length of objects. If you use `object.length`, it returns `undefined`. Naturally, this causes some issues if you try making length comparisons for objects.

Example:

```javascript
var a = { x: 1, y: 2 };
var b = { x: 5 }

return a.length === b.length;
// returns true
}
```

The above returns true since both `a.length` and `b.length` evaluate to `undefined`. Here are two ways to correctly find object length, using the same variables as above.

```javascript
// this converts it to an array, gets the array length,
// then converts back to an object.
// Doesn't work in older browsers.
return Object.keys(a).length;
// returns 2
```

```javascript
// count each property in given object
var lengthB = 0;

for (var i in b) {
  if (b.hasOwnProperty(i)) { lengthB++; }
}

return lengthB;
// return 1
```
