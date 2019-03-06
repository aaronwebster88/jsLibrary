/********
TERNARY
********/

//A great way to write a single line for an if / if else statement

let w = 6;

//Ternary:

(w > 0) ? console.log('yes') : console.log('no');

// Instead of:

if (w>0){
    console.log('yes');
} else {
    console.log('no');
}

// ELSE IF, regular
if(w == 0){
    console.log('hey hey hey');
} else if(w <0 ){
    console.log('nah nah nah, goodbye!');
} else {
    console.log('see ya later!');
};

// ELSE IF, as a TERNARY
(w == 0) ? console.log('hey hey hey') : (w < 0) ? console.log('nah nah nah, bye') : console.log('see ya later!');

let age = 30;

(age >= 25) ? console.log('Yay! You can rent a car!') : (age >= 21) ? console.log('Yay! You can drink!') : (age >= 18) ? console.log('Yay! You can vote!') : console.log('Sorry, you are too young to do anything!');