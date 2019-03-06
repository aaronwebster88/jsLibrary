/**************************
SWITCH

Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument being evaluated 
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary 

**************************/

let friend="Bob";

switch (friend) {
    case "Autumn":
    console.log("Hey Autumn, when are you going rock climbing?");
    break;
    case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;
    case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`); // string interpolation, backticks, under ESC
}

let dessert = "Candy";

switch (dessert) {
    case "Pie":
    console.log("Pie, Pie, me oh my!");
    break;
    case "Cake":
    console.log("Cake is great!");
    break;
    case "Ice Cream":
    console.log("I scream for Ice Cream!");
    break;
    default:
    console.log(`${dessert} is not on the menu, doofus!`);
}

let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked!');
        break;
    default:
        console.log('didnt work');
}

