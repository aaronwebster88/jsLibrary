/****************
 * FOR OF LOOPS
*****************/

/********************
 * Objects are not iterable (be able to be accessed by numbers) so this will crash. Can't use For Of Loops
 *  with Objects

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
};

for (item of student) {
    console.log(item);
}
***********************/

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (cat of catArray) {
    console.log('The',cat, 'says meow!');
}
