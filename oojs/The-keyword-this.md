# The keyword _this_

In most classical object oriented languages, there is a way to refer to the current object. With JavaScript the keyword _this_ is used.

Now _this_ maybe the most misunderstood aspect of the language. One way to understand it better is to think of it as the parameter _this_, as it behaves almost exactly as a parameter with two exceptions.

Firstly you, the developer, cannot pick its name - it will always be called `this`.

Secondly, values are bound differently to `this` compared with how values are bound to other parameters.

When you have a function invocation to the right of a full stop (`.`), this means that the function is a property of the object to the left of the full stop. Object properties that are functions are known as _methods_. When you invoke a method of an object, `this` will refer to the object on the left of the function invocation:
  
    v.method(w); // the object `v` is what `this` references

**NOTE** - when there is no period, `this` references the global object.

The keyword `this` makes it possible to build just one function object and use that as a method on other objects. Whenever it's called, it has access to whatever object it is being called on and thus conserves memory.

A quirk of JavaScript is that `this` within a closure or callback does not refer to the `this` of the outer function.

```
function StateMachine() {
    this.states = [/* array of objects */];
    this.currentState = "start";
}

StateMachine.prototype.checkState = function() {
    this.states.forEach(function(state) {
        console.log(state.name === this.currentState); // Broken code
    });
}
```

The `this` in `checkState` includes all of the properties defined in `StateMachine()`. But within the anonymous function passed in to `forEach` the `this` will actually be the global object or `undefined` (if using strict mode). To get around this problem, you can either assign `this` to a variable before or, more neatly, `bind` the anonymous function to the outer `this`. In ES6 you can also use a fat arrow function, which retains the `this` from the outer function.

```
// Option 1
StateMachine.prototype.checkState = function() {
    var that = this; // <-- new bit
    this.states.forEach(function(state) {
        console.log(state.name === that.currentState); // <-- new bit
    });
}

// Option 2
StateMachine.prototype.checkState = function() {
    this.states.forEach(function(state) {
        console.log(state.name === this.currentState);
    }.bind(this)); // <--- new bit
}

// Option 3
StateMachine.prototype.checkState = function() {
    this.states.forEach(state => { // <-- new bit
        console.log(state.name === this.currentState);
    });
}
```

##References
[Mozilla](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)  
[w3 schools](http://www.w3schools.com/js/js_object_definition.asp)
