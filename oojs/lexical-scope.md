#Lexical Scope

After starting the Udacity OO JavaScript course, one of the first topics was Lexical Scopes.

The most concise definition I found was: Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.

Essentially it is that a function remembers and preserves its state between and after execution.

Consider the following code.

    var outerFunction  = function()
    {
        if(true)
        {
           var x = 5;
           //console.log(y); 
           //line 1, ReferenceError: y not defined
        }
        var nestedFunction = function() 
        {
           if(true)
           {
              var y = 7;
              console.log(x); 
              //line 2, x will still be known prints 5
           }
 
           if(true)
           {
              console.log(y); //line 3, prints 7
           }
        }
        return nestedFunction;
    }
    var myFunction = outerFunction();
    myFunction();
    
So here the variable `x` is available throughout the `outerFunction()`. The variable `y` is defined within the `nestedFunction()` and therefore only available here. Lexical scoping explains that these variables' scope is defined by their position in the source code. To resolve the variables, JavaScript starts at the innermost and searches outwards until it finds the variable it is looking for.  The advantage of this is that we can determine the value of a variable by looking at the code, however, in dynamic scoping the variable can change at runtime.
