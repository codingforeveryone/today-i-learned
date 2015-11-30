There is no direct way to compare objects in JavaScript. For example, if you have `{} === {}`, it returns `false`.
This is also the case for arrays. However, you can get around this by comparing the properties.

```javascript
var compareObjects = function(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;  
  }

  for (var i in a) {
    if (a[i] !== b[i]) { return false; }
  }
  return true;
};
```
The `Object.keys(a).length` may not work in older browsers, e.g. IE8.  In that case, you can do something like this.

```javascript
var compareObjects = function(a, b) {
  for (var i in a) {
    if (!b.hasOwnProperty(i)) { return false; }
    if (a[i] !== b[i]) { return false; }
  }

  for (var i in b) {
    if (!a.hasOwnProperty(i)) { return false; }
  }
  return true;
};
```

[Both of the above methods were adapted from this blog.](https://stamat.wordpress.com/2013/06/22/javascript-object-comparison/)
