/******************
 * FOR IN LOOPS
 *****************/

 let student = {
     name: "Aaron",
     awesome: true,
     degree: "Masters",
     week: 1
}

for (let item in student) {
    console.log(item) // returns key of object above
    //console.log(student[item]) //  returns values of object above - square bracket notation - another way to dig thru an object
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (let cat in catArray) {
    //console.log(cat); // just grabs the index of the value in the array
    console.log(catArray[cat]); // grabs the variable value in the array
}

let studentName = 'auTuMn';
let capName;

for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName);
