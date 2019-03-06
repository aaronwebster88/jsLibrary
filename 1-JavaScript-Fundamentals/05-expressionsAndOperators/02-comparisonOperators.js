3 == 3

// Equal operator - will coherce value to a number if possible
3 == '3';

// Strictly Equal - stops cohersion; values and datatypes must match
3 === '3';
console.log(3 === '3'); // False

3 === 3;
console.log(3 === 3); // True

// Not Equal - cohersion still applies
'3' != 3; // False

// Strictly Not Equal - stops cohersion; values and datatypes must match
'3' !== 3; //True

// Greater Than
3 > 2; // True

// Less Than
2 < 3; // True

// Greater Than or Equal To
4 >= 2; // True

// Less Than or Equal To
2 <= 4; // True

// And
4 > 2 && 3 < 1;  // False

// Or 
4 > 2 || 3 < 1; // True
