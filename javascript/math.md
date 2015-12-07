If you wanted to extend the `Math` object, this can't be done  as `Math.prototype.newMethod`. This is because ["unlike the other global objects, Math is not a constructor. All properties and methods of Math are static."](http://stackoverflow.com/questions/10339334/is-there-any-practical-use-of-redefining-math-constructor-in-javascript-actionsc/10431309#10431309)

[This example](http://stackoverflow.com/questions/27580890/extending-math-object-through-prototype-doesnt-work) shows the different approachs that can be used for finding a random number between 2 given numbers, and is shown below.


```javascript
Math.__proto__.randomBetween = function (a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
};
```

```javascript
Math.randomBetween = function (a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
};
```

However, one thing to note is [this probably shouldn't be done in the first place](http://stackoverflow.com/questions/10339334/is-there-any-practical-use-of-redefining-math-constructor-in-javascript-actionsc/10431309#10431309)! Instead, just make your own mathematical function without using `Math` at all. You can run into problems, as the new functionality can override the original functionality.

```javascript
function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}
```
