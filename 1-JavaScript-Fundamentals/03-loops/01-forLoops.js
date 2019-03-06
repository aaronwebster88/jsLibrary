/****************************
 * FOR LOOPS
 ****************************/

/* Takes 3 expressions: a variable declaraction, 
an expression to be evaluated before each iteration, 
and an expression to be evaluated at the end of each iteration.
*/

 for (let i = 0; i < 10; i++) {
     console.log(i)
 }

 for (let i = 0; i <= 20; i += 2) {
     console.log(i)
 }

 for (let i = 10; i >0; i--) {
     console.log(i)
 }

 for (let i = 0; i >= -24; i -=2 ) {
     console.log(i)
 }

let name = 'Aaron'

for (let i = 0; i < name.length; i++){
    console.log(name[i])
}

let sum = 0;
for (let i = 0; i <= 50; i++) {
    sum += i // sum = sum + i
}
console.log(sum);