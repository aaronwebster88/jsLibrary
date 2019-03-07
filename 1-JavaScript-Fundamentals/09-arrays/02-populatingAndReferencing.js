/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list =  [  'item1',   'item2',    'item3']
console.log(typeof list); // typeof tells you the datatype of something in JS

let list2 = ['orange', 'banana', 'oreos'];
console.log(list2); // pulls the entire array, including brackets

console.log(list2[1]); // pulls index 1 of the array, in this case 'banana'


let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha',['Randy', 'Trevor'], 'Amira']];
// console.log(students instanceof Array); // True - there is an instance of an Array
// console.log(students[6][1]); // calls the 1st index of the array at index 6 of the first array
let myFriend = students[6][2][1];
let myFriend2 = students[6][1];
let myFriend3 = students[6][3];
console.log(`Hello ${myFriend}, you are a doofus!`);
console.log(`Hello ${myFriend2}, you are not a doofus!`)
console.log(`Hello ${myFriend3}, you are a super doofus!`)


let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for(let item in food){
//     console.log(food[item]);
// }

let pizza = 'Pizza';

food.push(pizza); //adds items to the end of an array

food.splice(1,1,'Bananas'); //what index to start at, how many to delete, what to replace with
food.splice(2,0,'Sweet Potato Pie'); //What  index to start at, how many to delete, what to replace with
food.splice(5,0,'Salmon');

food.pop(); //Removes last item of an array and returns it
console.log(food);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.forEach((food,number,arr) => {
    console.log(number);
    console.log(food);
    console.log(arr);
})

///////////////////////////////////////////

let movies = ['Interstellar', 'Inception', 'Grand Budapest Hotel', 'Isle of Dogs'];

movies.push('Sixteen Candles');

movies.splice(1,1,'ConAir');

movies.forEach(m =>{
    console.log(m);
})