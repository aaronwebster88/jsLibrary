let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); //property of the array telling you how long the dataset in the array is


let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors);
let newColors = colors.toString();
console.log(newColors[2]);

//CHALLENGE

let arr = [1,2,3,4,5]

if (arr instanceof Array === true){
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
}

