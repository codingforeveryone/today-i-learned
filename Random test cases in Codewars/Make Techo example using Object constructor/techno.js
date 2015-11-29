//Author: tas12
//Example for kata 'Make techno' by tu6619
//Note that these tests do not generate negative numbers. Please feel free to add code for this.
//Put all this code in the Test Case area. Add it under your existing test cases

//Create an Object called test. 
//This will hold methods for your random tests. 
var test = new Object;

//Create a method that generates valid input
test.a = function (){
  var valid = Math.round((Math.random()*100)*100)/100;
  console.log(valid);
  Test.assertSimilar(perc(valid),percTest(valid)); //perc is defined 
  
}

//Store NaN values in an array. The following links will aid in understanding this. 
// https://en.wikipedia.org/wiki/List_of_Unicode_characters 
// http://www.w3schools.com/jsref/jsref_fromCharCode.asp
var arr = [];
var i=33;
while(i<=126){
    if(i>=33 && i<=48 || i>=58 && i<=126) {
        arr.push(String.fromCharCode(i));
    }
    i++;
}
//create a method for generating random NaN values using the above array
test.b = function(){
  var nanLength = Math.round((Math.random()*10));
  var nanRandom = "";
  var i=0;

  while (i<=nanLength){
    nanRandom += arr[Math.floor(Math.random()*arr.length)];
    i++;
  }

  console.log(nanRandom);
  Test.assertSimilar(perc(nanRandom),percTest(nanRandom));
}

//Create a method for numbers less than one. Note that this does not generate negative values. 
test.c = function(){
  var lessThanOne = Math.round(Math.random()*100)/100;
  console.log(lessThanOne);
  Test.assertSimilar(perc(lessThanOne),percTest(lessThanOne));
}

//Create a method for numbers more than one hundred
test.d = function(){
  var moreThanHundred = Math.round((Math.random()*100+100.01)*100)/100;
  console.log(moreThanHundred);
  Test.assertSimilar(perc(moreThanHundred),percTest(moreThanHundred));

}

//Mathod calls for above methods
test.a();
test.a();
test.b();
test.b();
test.c();
test.c();
test.d();
test.d();
