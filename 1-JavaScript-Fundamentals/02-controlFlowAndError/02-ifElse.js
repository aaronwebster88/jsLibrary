let weather = 75;

if(weather < 70){
    console.log('Wear a jacket, doofus!');
} else {
    console.log('A jacket is too much, doofus!');
};

// CHALLENGE

let name = 'Aaron Webster';

if(name === 'Aaron Webster'){
    console.log('Hello, my name is' + ' ' + name);
} else {
    console.log('Hello, is your name' + ' ' + name + '?');
};

// CHALLENGE

let myName = 'aUTuMn';

if(myName[0] == myName[0].toUpperCase()){
    console.log(myName[0] + myName.substr(1).toLowerCase());
} else {
    console.log(myName[0].toUpperCase() + myName.substr(1).toLowerCase());
}


/*****************
ELSE IF
*****************/

let age = 30;

if(age >= 25){
    console.log('Yay! You can rent a car!');
} else if(age >= 21) {
    console.log('Yay! You can drink!');
} else if(age >= 18) {
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything!');
};


