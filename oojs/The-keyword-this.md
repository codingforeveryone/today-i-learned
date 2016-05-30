# The keyword _this_

In most classical object oriented languages, there is a way to refer to the current object.  With JavaScript the keyword _this_ is used.  

Now _this_ maybe the most misunderstood aspect of the language.  One way to understand it better is to think of it as the parameter _this_, as it behaves almost exactly as a parameter with two exceptions. 

Firstly you, the developer, cannot pick a name, it will always be the parameter _this_.

Secondly, values are bound differently to _this_ compared with how values are bound to other parameters.

When you have a period . to the left of a function invocation i.e. it was looked up as a property of an object on the Left Hand Side, 
  
     v.method(w); //v is what _this_ references

**NOTE** - when there is no period . then _this_ refernces the global object.

The keyword _this makes it possible to build just one function object and use that as a method on other objects. WHenever it's called, it has access to whatever object it is being called on and thus conserving memory.

##References## 
[Mozilla](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)  
[w3 schools](http://www.w3schools.com/js/js_object_definition.asp)