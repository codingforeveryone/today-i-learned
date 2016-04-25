#Closures

The Second topic from the Udacity OO JavaScript course was closures.  The definition from the course was good, however, the Mozilla Development Network does it better. 

__'A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.'__

The following code contains nested functions in an object with properties.

    var cat = 
    {
       name: "Joe",
       colour: "gray",
       age: 15,
 
       printInfo: function() 
       {
          console.log("Name:", 
              this.name, "Colour:", 
              this.colour, "Age:", 
              this.age); //line 1, prints correctly
 
          nestedFunction = function() 
          {
              console.log("Name:", 
              this.name, "Colour:", 
              this.colour, "Age:", 
              this.age); //line 2, loses cat scope
          }
 
          nestedFunction();
       }
    }
    cat.printInfo(); 
    //prints Name: window Colour: undefined Age: undefined

The reason why `colour` and `age` are undefined for `cat.printInfo()` even though the cat object properties are defined clearly, is that JavaScript loses scope of `this` when used inside a function  contained within a function.  When it is lost `this` will by default be bound to the global window object.  Note the window object happens to have a `name` property with the value `window`.
