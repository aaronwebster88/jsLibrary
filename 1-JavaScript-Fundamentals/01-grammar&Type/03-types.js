/* Six different data types for JavaScript */

/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 
let i = true;
let j = false;
/*        (1)
1-Keyword for boolean - no quotation marks
let on = true;
console.log(on); // true
let off = false;
console.log(off); // false
 
/*

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty); // null

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined;// never do this
console.log(undef); // undefined

let grass;
console.log(grass); // undefined

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 

/* 
NUMBERS
*****************

JavaScript is precise up to the 15th whole digit in a number, after which it begins rounding/shortening
*/

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

let degrees = 90;
console.log(degrees);


let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's
console.log(rounded); // 

let notQuite = 0.2 +0.1;
console.log(notQuite);

let a = '123';

let b = Number(a);
console.log(b);

let firstName = "Aaron";
let lastName = " Webster";

console.log(firstName, lastName);


/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 +100;
let second = '1050' + '100'; 

console.log(first);
console.log(second);

let firstName = "Autumn";
let lastName = "Henderson"; 

console.log(firstName + lastName);
console.log(firstName +' '+ lastName);
console.log(firstName, lastName);
Collapse


/*
Objects
*************

*/


let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
  };
  
  console.log(car1); // { size: 'large', quantity: 4, now: true }
  console.log(typeof car1); // object

  
/*
Arrays
************
Arrays are containers that hold lists of items
*/
let list =  [  'item1',   'item2',    'item3', true];
 /*   (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let burritos = ['large',4,true];
console.log(burritos); 
console.log( typeof burritos);

// Addition Vs Concatenation
/************************* 

*/

// Addition 
let x = 10;
let y = 15;
console.log(x + y);

// Concatenation
let third = 1050 + '100';
console.log(third);

let firstName = 'Aaron';
let lastName = 'Webster';
let houseNumber = 8760;
let street = 'Rhone Terrace';
let city = 'Indianapolis';
let state = 'IN';
let zipCode = 46250;

console.log(firstName, lastName, houseNumber, street, city + ',', state, zipCode);

/*
Strings - Properties
********************

Properties are qualities associated with a datatype.
Strings have properties, or the qualities associated with that string. 
The Length of a string is a property.
*/

let myName = 'Aaron Webster';
console.log(myName.length);

/*
Methods
**************
Methods are like tools that can help us manipulate our data. 
.Property and .Methods() *no parenthesis fo properties*
*/

let myName = 'Aaron';
console.log(myName.toUpperCase());



let sent = 'This sentence will be split into individual parts ';

let newStr = sent.split(' ');
console.log(newStr);