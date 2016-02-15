Today, after fighting with setInterval for some time, I learned the difference between a function reference and a function call.
A function call, such as ```someFunc()``` will be called immediately. Whereas a function reference, ```someFunc //no parentheses```
can be stored as a variable and called later. For example:

```function callMe(){console.log('call me anytime')};```

```var blondie = callMe; //does not call the function``` 

```blondie(); //returns 'call me anytime'```

So ```setInterval(callMe, 1000);``` will log to the console once per second, but ```setInterval(callMe(), 1000)``` will try to 
assign the result of ```callMe()``` as the function to be called. If ```callMe()``` returned a function reference, it would
fire that referenced function once per second. As ```callMe()``` returns nothing, this would log once to the console and cease.
