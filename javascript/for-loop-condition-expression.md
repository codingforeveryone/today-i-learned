The syntax of the `for` statement in JavaScript consists of the `initialization`, `condition` and `final-expression`, as follows:
``` javascript
for ([initialization]; [condition]; [final-expression])
  statement
```

Today I learned that, in the `condition` expression, the value against which the value of the changing variable (often `i`) is compared does not get stored, but is generated anew each time the `for` loop runs.

For example, when constructing random tests for your Codewars kata, you may want to run your `for` loop a random number of times. One way to try to get the loop to run between `1` and `10` times might be:
``` javascript
for (var i = 0; i < Math.ceil(Math.random()*10); i++) {
  console.log("Hello!");
}
```
However, this code will generate a new random number before each loop iteration, meaning that the probability of the loop running many times will be much smaller than the probability of it running once or twice. This is because even if the random number generated is high, it will likely be replaced with a smaller random number in the next loop iteration, and the loop will stop sooner than would be expected from the uniform probability distribution.

A better way of getting the loop to run between `1` and `10` times would be:
``` javascript
var max = Math.ceil(Math.random()*10);
for (var i = 0; i < max; i++) {
  console.log("Hello!");
}
```
Now, the random number will be generated only once, stored in the `max` variable, and used to evaluate the `condition` expression throughout all iterations of the `for` loop.
