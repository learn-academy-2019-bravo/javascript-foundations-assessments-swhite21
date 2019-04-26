// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
function divChecker(num){
  if(num % 2 != 0){
    return num +" is divisable by 3"
  }else {
    return num + " is not divisable by 3"
  }
}
console.log(divChecker(3));
console.log(divChecker(2));
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
let helloMe = {
  first_name: "sebastian",
  last_name:" white",
  gender:" male",
  location: "san diego"
}

personBio = (person) =>{
  return `This persons name is ${person.first_name} ${person.last_name}. they are a ${person.gender} living in ${person.location}`
}
console.log(personBio(helloMe));
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
const groceryItems = ["eggs", "cereal", "moldy eggs", "apples", "eggshell"]

function firstMidLast(arr){
  return `${arr[0]} ${arr[2]} ${arr[4]}`
}
console.log(firstMidLast(groceryItems));
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
function alphabetSoup(str){
  return str.split('').sort().join('');
}
console.log(alphabetSoup("learn"));
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

function animalNums(numArr, AniArr){
  let finalString = ""
// I know i shouldn't hardcode 7 in here but...
  for(let i = 0; i < 7; i++){
   finalString += " " +numArr[i] + " " +AniArr[i];
 }return finalString
}
console.log(animalNums(nums, nouns));
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var newNum = [12, 4, 5, 6, 2]
function numMultiply(newArr){
  return newArr.map(value => value * 5)
}
console.log(numMultiply(newNum));
