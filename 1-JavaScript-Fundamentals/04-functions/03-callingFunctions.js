/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi() {
    console.log('Hi!');
}

hi();

//Challenge

function numbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

numbers();

//Challenge

let arr = ['This', 'is', 'really', 'cool'];

function statement() {
    for (word of arr) {
        console.log(word);
    }
}

statement();


/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/

function hi(name){
    console.log(`Hi ${name}!`);
}

hi('Dingus');

function pet(animal){
    console.log(`I have a ${animal} for a pet.`);
}

pet('cat');

// Challenge

function fullName(first,last){
    let fName = `${first} ${last}`; 
    console.log(`Hello, my name is ${fName}`);
}

fullName('Aaron','Webster');


/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function

Fat arrow functions don't get hoisted

Concise
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}
*/

function coffee(){
    console.log('Coffee is good!');
}

let coffee = () => {
    console.log('I like Coffee!');
}

coffee(); // This calls either function, no difference in calling

/******************* */

let cats = (kitten, puppy) => console.log(`I have ${kitten} cats and ${puppy} dogs`);

cats(2,4);

//Concise - has impled return
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

//Block-Body will NOT have implied return if more than one line
let apple = (x) => {console.log(`There are ${x} apples.`)}
apple(10);



/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);


/***********
CHALLENGE
***********/

function tipCalc(bill) {
    let tip = (bill * 0.2);
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);

//Concise version of challenge

let tipper = bill => (bill * 0.2).toFixed(2)
let tips = tipper(19.88);
console.log(tips);

