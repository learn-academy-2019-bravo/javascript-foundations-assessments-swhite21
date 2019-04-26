# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

boolean, number, string, null.

2. What's the difference between =, ==, and === in JavaScript?

= will set a variable equal to a value. == is a comparison operator and will check whether a value or variable is equal to another and return true or false. === is also a comparison operator but differs from == in that it checks the value and datatype of a variable or value. for === to return true both data type and value must be the same.

3. What is the difference between an array's index and length?

if you where to run a method to find the length of an array it would return how many elements are in the array, this value varies from the index values of each element by -1. for example if you have the array numberArr = [1, 2, 3, 4, 5] the length/ number of elements is equal to 5 but the index of the elements only goes up to 4 because the first element in the array is indexed at position 0 as oppossed to 1.

4. What are the three parts of a for loop?

initialization, checker, iterating part.(i know this is probably not the correct terms for each part but i just named them according to what they generally do).
the initializing section is generally used for declaring the starting state of a variable that will be used to iterate through the for loop. the checker part of the for loop is used to check whether a condition is met and if it returns false the for loop will continue to run. the iterating part is where you change the state of your counter/ the variable you declared in your initializing section, this section runs once each loop and executes before the code within the for loop is executed unlike a while loop.

5. What is a function's declaration, argument, and call?

a functions declaration is when it is declared/defined. the argument/s are the parameters that your function will accept/ pass to the code within the function. the function call or name of the function is whatever you name it in the decleration for example if you setup a function with the name myFunction(str){} to console log the function you would "call it" by typing consolelog(myfunction("your string here")).

6. What are the three main steps in saving work to github?

git add
git commit
git push

7. What is the terminal command to move directories?

cd your/desired/pathway

8. Do you have a suggestion for a Check In question?

hobbies?

9. What was your favorite topic this week?

SUPER Classes

10. What was your "A-ha!" moment this week?

learning how super classes worked filled in the gap in my mind when it came to thinking about how databases pass information around in an orderly fashion

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
//PRE GOOGLE answer
the console will log "outside" because the console logs the variable text prior to redefining it as "inside"
//Post Google answer
 the function "logIt" will return undefined. this happens becuase JS hoists the decleration of the test variable to the top of the local scope that its being declared in or in this case the local scope of its redecleration. this causes the text variable at the time of the console log to be undefined becuase the redecleration is executed after the console log

2. What is JSON? How does it relate to javascript objects?

JSON stands for javascript object notation and is a standard format that APIs use to send and recieve data from other programs

3. Describe a closure, what is it good for and how do you recognize one?

closure is when a function is referenced within itself and calls a variable from the parent function without having to declare it again. you can recognize a closure when you see a function call itself and use a variable declared in the parent function.
// better worded answer from google
 closure is a function having access to the parent scope, even after the parent function has closed.
